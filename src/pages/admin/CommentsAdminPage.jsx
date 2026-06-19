import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/components/common/PageMeta";
import {
  ADMIN_COMMENT_AUTHOR_NAME,
  COMMENT_ERROR_MESSAGES,
} from "@/lib/commentsConfig";
import { usesDevCommentStorage } from "@/lib/commentsApi";
import { COMMENTS_CHANGED_EVENT } from "@/lib/commentsDevStorage";
import {
  clearAdminSession,
  deleteAdminComment,
  deleteAdminComments,
  fetchAdminComments,
  getCommentsStorageMode,
  isAdminSessionValid,
  isCommentsAdminAvailable,
  loginCommentsAdmin,
  updateAdminCommentStatus,
} from "@/lib/commentsAdminApi";
import {
  buildAreaMenuOptions,
  buildPageFilterOptions,
  buildSubSectionMenuOptions,
  filterComments,
  groupCommentsByPage,
  isPendingComment,
  paginateList,
  resolveSectionPrefix,
  ADMIN_COMMENTS_PAGE_SIZE,
  getCommentAreaKey,
} from "@/lib/commentsAdminUtils";

const STATUS_OPTIONS = [
  { value: "", label: "전체 상태" },
  { value: "pending", label: "검수 대기" },
  { value: "approved", label: "승인" },
  { value: "rejected", label: "거절" },
  { value: "spam", label: "스팸" },
];

function statusBadgeClass(status) {
  return `comments_admin__badge comments_admin__badge--${status}`;
}

function formatDate(value) {
  return new Date(value).toLocaleString("ko-KR");
}

function CommentActionsCell({ comment, onStatusChange, onDelete }) {
  return (
    <div className="comments_admin__row_actions">
      {comment.status !== "approved" ? (
        <button
          type="button"
          className="comments_admin__btn comments_admin__btn--small"
          onClick={() => onStatusChange(comment.id, "approved")}
        >
          승인
        </button>
      ) : null}
      {comment.status !== "rejected" ? (
        <button
          type="button"
          className="comments_admin__btn comments_admin__btn--small comments_admin__btn--ghost"
          onClick={() => onStatusChange(comment.id, "rejected")}
        >
          거절
        </button>
      ) : null}
      <button
        type="button"
        className="comments_admin__btn comments_admin__btn--small comments_admin__btn--danger"
        onClick={() => onDelete(comment.id)}
      >
        삭제
      </button>
    </div>
  );
}

const STATUS_LIST_TITLES = {
  "": "전체 댓글",
  pending: "검수 대기",
  approved: "승인",
  rejected: "거절",
  spam: "스팸",
};

function getStatusLabel(status) {
  return STATUS_LIST_TITLES[status] ?? status;
}

function CommentCardItem({
  comment,
  showStatus,
  selected,
  onToggleSelect,
  onStatusChange,
  onDelete,
}) {
  return (
    <li className="comments_admin__card_item">
      <div className="comments_admin__card_select">
        <input
          type="checkbox"
          className="comments_admin__checkbox"
          checked={selected}
          onChange={() => onToggleSelect(comment.id)}
          aria-label={`${comment.author_name} 댓글 선택`}
        />
      </div>
      <dl className="comments_admin__card_fields">
        <div className="comments_admin__card_field">
          <dt>작성일</dt>
          <dd>{formatDate(comment.created_at)}</dd>
        </div>
        <div className="comments_admin__card_field">
          <dt>작성자</dt>
          <dd>{comment.author_name}</dd>
        </div>
        {showStatus ? (
          <div className="comments_admin__card_field">
            <dt>상태</dt>
            <dd>
              <span className={statusBadgeClass(comment.status)}>
                {getStatusLabel(comment.status)}
              </span>
            </dd>
          </div>
        ) : null}
        <div className="comments_admin__card_field comments_admin__card_field--body">
          <dt>내용</dt>
          <dd>{comment.body}</dd>
        </div>
      </dl>
      <div className="comments_admin__card_actions">
        <CommentActionsCell
          comment={comment}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      </div>
    </li>
  );
}

function CommentPageGroupCard({
  group,
  showStatus,
  selectedIds,
  onToggleSelect,
  onStatusChange,
  onDelete,
}) {
  return (
    <article className="comments_admin__group">
      <header className="comments_admin__group_header">
        <Link
          className="comments_admin__group_link"
          to={group.pagePath}
          target="_blank"
          rel="noopener noreferrer"
        >
          {group.label}
        </Link>
        <span className="comments_admin__group_stats">
          <span>{group.totalCount}건</span>
          {group.pendingCount > 0 ? (
            <span className="comments_admin__group_pending">
              검수 대기 {group.pendingCount}건
            </span>
          ) : null}
        </span>
      </header>
      <ul className="comments_admin__group_items">
        {group.comments.map((comment) => (
          <CommentCardItem
            key={comment.id}
            comment={comment}
            showStatus={showStatus}
            selected={selectedIds.has(comment.id)}
            onToggleSelect={onToggleSelect}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </article>
  );
}

function normalizeAdminComments(comments) {
  if (Array.isArray(comments)) return comments;
  if (typeof comments === "string") {
    try {
      const parsed = JSON.parse(comments);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

const PAGE_FILTER_SEARCH_THRESHOLD = 6;

function CommentsAdminPageFilter({
  areaFilter,
  subSectionOptions,
  subSectionFilter,
  pageOptions,
  pagePathFilter,
  onPageChange,
}) {
  const [pageSearch, setPageSearch] = useState("");
  const needsSubSection =
    areaFilter && subSectionOptions.length > 0 && !subSectionFilter;
  const showPageFilter =
    areaFilter && pageOptions.length > 1 && !needsSubSection;

  const normalizedSearch = pageSearch.trim().toLowerCase();
  const filteredPageOptions = useMemo(() => {
    if (!normalizedSearch) return pageOptions;
    return pageOptions.filter((option) => {
      if (!option.value) return true;
      return option.label.toLowerCase().includes(normalizedSearch);
    });
  }, [pageOptions, normalizedSearch]);

  const pageCount = pageOptions.length - 1;
  const showSearch = pageCount >= PAGE_FILTER_SEARCH_THRESHOLD;

  useEffect(() => {
    if (!showPageFilter) setPageSearch("");
  }, [showPageFilter, areaFilter, subSectionFilter]);

  if (!areaFilter) return null;

  if (needsSubSection) {
    return (
      <div className="comments_admin__page_filter">
        <p className="comments_admin__page_filter_hint">
          페이지를 선택하려면 하위 섹션을 먼저 선택해 주세요.
        </p>
      </div>
    );
  }

  if (!showPageFilter) return null;

  return (
    <div className="comments_admin__page_filter">
      <div className="comments_admin__page_filter_head">
        <label className="comments_admin__label" htmlFor="filter-page">
          페이지
        </label>
        <span className="comments_admin__page_filter_count">{pageCount}개</span>
      </div>

      {showSearch ? (
        <div className="comments_admin__field comments_admin__field--inline">
          <input
            id="filter-page-search"
            className="comments_admin__input comments_admin__input--full"
            type="search"
            value={pageSearch}
            onChange={(event) => setPageSearch(event.target.value)}
            placeholder="페이지명으로 검색"
            aria-label="페이지명으로 검색"
            autoComplete="off"
          />
        </div>
      ) : null}

      <div className="comments_admin__field comments_admin__field--inline">
        <select
          id="filter-page"
          className="comments_admin__select comments_admin__select--wide"
          value={pagePathFilter}
          onChange={(event) => onPageChange(event.target.value)}
        >
          {filteredPageOptions.map((option) => (
            <option key={option.value || "all-page"} value={option.value}>
              {option.value && option.count
                ? `${option.label} (${option.count})`
                : option.label}
            </option>
          ))}
        </select>
        {showSearch && normalizedSearch && filteredPageOptions.length <= 1 ? (
          <p className="comments_admin__page_filter_hint">
            검색 결과가 없습니다.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function CommentsAdminMenuNav({
  areaOptions,
  areaFilter,
  subSectionOptions,
  subSectionFilter,
  pageOptions,
  pagePathFilter,
  onAreaChange,
  onSubSectionChange,
  onPageChange,
}) {
  return (
    <div className="comments_admin__menu_nav">
      <nav className="comments_admin__nav" aria-label="섹션 메뉴">
        <ul>
          {areaOptions.map((option) => (
            <li
              key={option.value || "all"}
              className={areaFilter === option.value ? "active" : undefined}
            >
              <button type="button" onClick={() => onAreaChange(option.value)}>
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {areaFilter && subSectionOptions.length > 0 ? (
        <nav className="comments_admin__subnav" aria-label="하위 섹션 메뉴">
          <ul>
            {subSectionOptions.map((option) => (
              <li
                key={option.value || "all-sub"}
                className={
                  subSectionFilter === option.value ? "active" : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => onSubSectionChange(option.value)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <CommentsAdminPageFilter
        areaFilter={areaFilter}
        subSectionOptions={subSectionOptions}
        subSectionFilter={subSectionFilter}
        pageOptions={pageOptions}
        pagePathFilter={pagePathFilter}
        onPageChange={onPageChange}
      />
    </div>
  );
}

function CommentsAdminPagination({ pagination, onPageChange }) {
  if (pagination.totalCount <= pagination.pageSize) return null;

  return (
    <nav className="comments_admin__pagination" aria-label="댓글 목록 페이지">
      <p className="comments_admin__pagination_summary">
        {pagination.totalCount}건 중 {pagination.rangeStart}–
        {pagination.rangeEnd}
      </p>
      <div className="comments_admin__pagination_actions">
        <button
          type="button"
          className="comments_admin__btn comments_admin__btn--ghost comments_admin__btn--small"
          disabled={!pagination.hasPrev}
          onClick={() => onPageChange(pagination.page - 1)}
        >
          이전
        </button>
        <span className="comments_admin__pagination_status">
          {pagination.page} / {pagination.totalPages}
        </span>
        <button
          type="button"
          className="comments_admin__btn comments_admin__btn--ghost comments_admin__btn--small"
          disabled={!pagination.hasNext}
          onClick={() => onPageChange(pagination.page + 1)}
        >
          다음
        </button>
      </div>
    </nav>
  );
}

function CommentsListSection({
  title,
  comments,
  totalCount,
  showEmpty = false,
  showStatus,
  emptyMessage,
  pagination,
  selectedIds,
  bulkDeleting,
  onToggleSelect,
  onToggleSelectPage,
  allPageSelected,
  somePageSelected,
  onPageChange,
  onStatusChange,
  onDelete,
  onDeleteSelected,
  onDeleteAll,
}) {
  const selectAllRef = useRef(null);
  const groupedComments = useMemo(
    () => groupCommentsByPage(comments),
    [comments],
  );

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = somePageSelected && !allPageSelected;
    }
  }, [allPageSelected, somePageSelected]);

  const selectedCount = selectedIds.size;

  if (totalCount === 0 && !showEmpty) return null;

  return (
    <section
      className="comments_admin__pending_section"
      aria-labelledby="comments-list-title"
    >
      <div className="comments_admin__pending_header">
        <h2 id="comments-list-title" className="comments_admin__pending_title">
          {title} ({totalCount})
        </h2>
        {totalCount > 0 ? (
          <div className="comments_admin__bulk_actions">
            <button
              type="button"
              className="comments_admin__bulk_btn comments_admin__bulk_btn--selected"
              disabled={selectedCount === 0 || bulkDeleting}
              onClick={onDeleteSelected}
            >
              {bulkDeleting ? "삭제 중…" : `선택 삭제 (${selectedCount})`}
            </button>
            <button
              type="button"
              className="comments_admin__bulk_btn comments_admin__bulk_btn--all"
              disabled={bulkDeleting}
              onClick={onDeleteAll}
            >
              {bulkDeleting ? "삭제 중…" : `전체 삭제 (${totalCount})`}
            </button>
          </div>
        ) : null}
      </div>
      {totalCount === 0 ? (
        <p className="comments_admin__status">{emptyMessage}</p>
      ) : (
        <>
          <div className="comments_admin__list_toolbar">
            <label className="comments_admin__select_all">
              <input
                ref={selectAllRef}
                type="checkbox"
                className="comments_admin__checkbox"
                checked={allPageSelected}
                onChange={onToggleSelectPage}
                aria-label="현재 페이지 전체 선택"
              />
              현재 페이지 전체 선택
            </label>
          </div>
          <div className="comments_admin__cards">
            {groupedComments.map((group) => (
              <CommentPageGroupCard
                key={group.pagePath}
                group={group}
                showStatus={showStatus}
                selectedIds={selectedIds}
                onToggleSelect={onToggleSelect}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
              />
            ))}
          </div>
          <CommentsAdminPagination
            pagination={pagination}
            onPageChange={onPageChange}
          />
        </>
      )}
    </section>
  );
}

function CommentsAdminPage() {
  usePageMeta({
    title: "댓글 관리",
    description: "UXKM 문서 댓글 관리자 페이지",
    layout: {
      mainClass: "comments_admin_page",
      type: "publishing",
      sideMenu: false,
      contentList: false,
      reference: false,
      info: false,
      note: false,
      comments: false,
    },
  });

  const available = isCommentsAdminAvailable();
  const [authenticated, setAuthenticated] = useState(() =>
    isAdminSessionValid(),
  );
  const [adminPassword, setAdminPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [actionError, setActionError] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");
  const [areaFilter, setAreaFilter] = useState("");
  const [subSectionFilter, setSubSectionFilter] = useState("");
  const [pagePathFilter, setPagePathFilter] = useState("");
  const [listPage, setListPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [bulkDeleting, setBulkDeleting] = useState(false);
  const storageMode = getCommentsStorageMode();

  const loadComments = useCallback(
    async (password = adminPassword) => {
      setLoading(true);
      setActionError("");

      const result = await fetchAdminComments({
        adminPassword: password,
      });

      setLoading(false);

      if (!result.ok) {
        setActionError(result.error ?? COMMENT_ERROR_MESSAGES.server_error);
        setComments([]);
        return;
      }

      setComments(normalizeAdminComments(result.comments));
    },
    [adminPassword],
  );

  useEffect(() => {
    if (!isAdminSessionValid()) {
      clearAdminSession();
      setAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (!authenticated) return undefined;

    let cancelled = false;

    void (async () => {
      setLoading(true);
      setActionError("");

      const result = await fetchAdminComments({
        adminPassword,
      });
      if (cancelled) return;
      setLoading(false);
      if (result.ok) {
        setComments(normalizeAdminComments(result.comments));
        setActionError("");
        return;
      }
      clearAdminSession();
      setAuthenticated(false);
      setComments([]);
      setActionError(
        result.error ?? "로그인 세션이 만료되었습니다. 다시 로그인해 주세요.",
      );
    })();

    return () => {
      cancelled = true;
    };
  }, [authenticated, adminPassword]);

  useEffect(() => {
    if (!authenticated) return undefined;

    const reload = () => {
      void loadComments();
    };

    window.addEventListener(COMMENTS_CHANGED_EVENT, reload);
    window.addEventListener("focus", reload);

    return () => {
      window.removeEventListener(COMMENTS_CHANGED_EVENT, reload);
      window.removeEventListener("focus", reload);
    };
  }, [authenticated, loadComments]);

  useEffect(() => {
    setListPage(1);
  }, [statusFilter, areaFilter, subSectionFilter, pagePathFilter]);

  useEffect(() => {
    setSelectedIds(new Set());
  }, [statusFilter, areaFilter, subSectionFilter, pagePathFilter]);

  const sectionFilter = useMemo(
    () => resolveSectionPrefix(areaFilter, subSectionFilter),
    [areaFilter, subSectionFilter],
  );

  const statusFilteredComments = useMemo(() => {
    if (!statusFilter) return comments;
    if (statusFilter === "pending") {
      return comments.filter((comment) => isPendingComment(comment));
    }
    return comments.filter((comment) => comment.status === statusFilter);
  }, [comments, statusFilter]);

  const areaOptions = useMemo(
    () => buildAreaMenuOptions(statusFilteredComments),
    [statusFilteredComments],
  );
  const subSectionOptions = useMemo(
    () => buildSubSectionMenuOptions(statusFilteredComments, areaFilter),
    [statusFilteredComments, areaFilter],
  );

  useEffect(() => {
    const needsSubSection =
      areaFilter && subSectionOptions.length > 0 && !subSectionFilter;
    if (needsSubSection && pagePathFilter) {
      setPagePathFilter("");
    }
  }, [areaFilter, subSectionFilter, subSectionOptions.length, pagePathFilter]);

  const pageOptions = useMemo(() => {
    const canListPages =
      areaFilter && (subSectionFilter || subSectionOptions.length === 0);

    if (!canListPages) {
      return [{ value: "", label: "전체 페이지" }];
    }

    const scoped = filterComments(statusFilteredComments, {
      sectionPrefix: sectionFilter,
    });
    const options = buildPageFilterOptions(scoped);
    return [{ value: "", label: "전체 페이지" }, ...options];
  }, [
    statusFilteredComments,
    sectionFilter,
    areaFilter,
    subSectionFilter,
    subSectionOptions.length,
  ]);

  const filteredComments = useMemo(() => {
    let filtered = filterComments(statusFilteredComments, {
      sectionPrefix: sectionFilter,
      pagePath: pagePathFilter,
    });

    if (areaFilter === "other") {
      filtered = filtered.filter(
        (comment) => getCommentAreaKey(comment.page_path) === "other",
      );
    }

    return filtered;
  }, [statusFilteredComments, sectionFilter, pagePathFilter, areaFilter]);

  const listComments = useMemo(
    () =>
      [...filteredComments].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      ),
    [filteredComments],
  );

  const listPagination = useMemo(
    () => paginateList(listComments, listPage),
    [listComments, listPage],
  );

  const currentPageIds = useMemo(
    () => listPagination.items.map((comment) => comment.id),
    [listPagination.items],
  );

  const allPageSelected =
    currentPageIds.length > 0 &&
    currentPageIds.every((id) => selectedIds.has(id));

  const somePageSelected = currentPageIds.some((id) => selectedIds.has(id));

  const toggleSelect = useCallback((commentId) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(commentId)) next.delete(commentId);
      else next.add(commentId);
      return next;
    });
  }, []);

  const toggleSelectPage = useCallback(() => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allPageSelected) {
        currentPageIds.forEach((id) => next.delete(id));
      } else {
        currentPageIds.forEach((id) => next.add(id));
      }
      return next;
    });
  }, [allPageSelected, currentPageIds]);

  const pendingComments = useMemo(() => {
    let filtered = filterComments(comments, {
      sectionPrefix: sectionFilter,
      pagePath: pagePathFilter,
    }).filter((comment) => isPendingComment(comment));

    if (areaFilter === "other") {
      filtered = filtered.filter(
        (comment) => getCommentAreaKey(comment.page_path) === "other",
      );
    }

    return filtered;
  }, [comments, sectionFilter, pagePathFilter, areaFilter]);

  useEffect(() => {
    const totalPages = Math.max(
      1,
      Math.ceil(listComments.length / ADMIN_COMMENTS_PAGE_SIZE) || 1,
    );
    if (listPage > totalPages) {
      setListPage(totalPages);
    }
  }, [listComments.length, listPage]);

  const pendingPageCount = useMemo(() => {
    const pages = new Set(
      comments
        .filter((comment) => isPendingComment(comment))
        .map((comment) => comment.page_path),
    );
    return pages.size;
  }, [comments]);

  async function handleLogin(event) {
    event.preventDefault();
    setLoginError("");

    const result = await loginCommentsAdmin(adminPassword);
    if (!result.ok) {
      setLoginError(result.error ?? COMMENT_ERROR_MESSAGES.admin_forbidden);
      return;
    }

    setAuthenticated(true);
    await loadComments(adminPassword);
  }

  function handleLogout() {
    clearAdminSession();
    setAuthenticated(false);
    setAdminPassword("");
    setComments([]);
    setActionError("");
    setLoginError("");
    setAreaFilter("");
    setSubSectionFilter("");
    setPagePathFilter("");
    setListPage(1);
    setSelectedIds(new Set());
  }

  async function handleStatusChange(commentId, status) {
    const result = await updateAdminCommentStatus({
      adminPassword,
      commentId,
      status,
    });

    if (!result.ok) {
      setActionError(result.error ?? COMMENT_ERROR_MESSAGES.server_error);
      return;
    }

    await loadComments();
  }

  async function handleDelete(commentId) {
    if (!window.confirm("이 댓글을 관리자 권한으로 삭제할까요?")) return;

    const result = await deleteAdminComment({
      adminPassword,
      commentId,
    });

    if (!result.ok) {
      setActionError(result.error ?? COMMENT_ERROR_MESSAGES.delete_failed);
      return;
    }

    await loadComments();
  }

  async function handleDeleteSelected() {
    const ids = [...selectedIds];
    if (ids.length === 0) return;
    if (!window.confirm(`선택한 댓글 ${ids.length}건을 삭제할까요?`)) return;

    setBulkDeleting(true);
    setActionError("");

    const result = await deleteAdminComments({
      adminPassword,
      commentIds: ids,
    });

    setBulkDeleting(false);

    if (!result.ok) {
      setActionError(result.error ?? COMMENT_ERROR_MESSAGES.delete_failed);
      return;
    }

    setSelectedIds(new Set());
    await loadComments();

    if (result.partial) {
      setActionError(
        `${result.deleted}건 삭제되었습니다. ${result.failed}건은 삭제하지 못했습니다.`,
      );
    }
  }

  async function handleDeleteAll() {
    const ids = listComments.map((comment) => comment.id);
    if (ids.length === 0) return;
    if (
      !window.confirm(
        `현재 필터 조건의 댓글 ${ids.length}건을 모두 삭제할까요?`,
      )
    ) {
      return;
    }

    setBulkDeleting(true);
    setActionError("");

    const result = await deleteAdminComments({
      adminPassword,
      commentIds: ids,
    });

    setBulkDeleting(false);

    if (!result.ok) {
      setActionError(result.error ?? COMMENT_ERROR_MESSAGES.delete_failed);
      return;
    }

    setSelectedIds(new Set());
    setListPage(1);
    await loadComments();

    if (result.partial) {
      setActionError(
        `${result.deleted}건 삭제되었습니다. ${result.failed}건은 삭제하지 못했습니다.`,
      );
    }
  }

  if (!available) {
    return (
      <div className="comments_admin">
        <h1 className="comments_admin__title">댓글 관리</h1>
        <p className="comments_admin__desc">댓글 기능이 설정되지 않았습니다.</p>
        <p className="mt_m">
          <Link to="/">홈으로</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="comments_admin">
      <h1 className="comments_admin__title">댓글 관리</h1>
      <p className="comments_admin__desc">
        {storageMode === "supabase"
          ? "Supabase에 저장된 댓글을 관리합니다. 관리자 비밀번호는 Supabase comment_admin_settings에 등록한 값을 사용합니다."
          : usesDevCommentStorage()
            ? "로컬 개발 모드입니다. 이 브라우저 localStorage에 저장된 댓글만 표시됩니다."
            : "댓글 승인·거절·삭제를 관리합니다."}
      </p>

      {!authenticated ? (
        <form className="comments_admin__login" onSubmit={handleLogin}>
          <div className="comments_admin__field">
            <label className="comments_admin__label" htmlFor="admin-password">
              관리자 비밀번호
            </label>
            <input
              id="admin-password"
              className="comments_admin__input"
              type="password"
              value={adminPassword}
              onChange={(event) => setAdminPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {loginError ? (
            <p className="comments_admin__error" role="alert">
              {loginError}
            </p>
          ) : null}
          <div className="comments_admin__actions">
            <button type="submit" className="comments_admin__btn">
              로그인
            </button>
          </div>
        </form>
      ) : (
        <div className="comments_admin__panel">
          <div className="comments_admin__panel_head">
            <p className="comments_admin__session" role="status">
              로그인: <strong>{ADMIN_COMMENT_AUTHOR_NAME}</strong>
              {!loading ? (
                <span className="comments_admin__summary">
                  {" "}
                  · 전체 {comments.length}건
                  {pendingComments.length > 0
                    ? ` · 검수 대기 ${pendingComments.length}건 (${pendingPageCount}페이지)`
                    : ""}
                </span>
              ) : null}
            </p>
            <div className="comments_admin__panel_actions">
              <button
                type="button"
                className="comments_admin__btn comments_admin__btn--small"
                onClick={() => loadComments()}
                disabled={loading}
              >
                {loading ? "불러오는 중…" : "새로고침"}
              </button>
              <button
                type="button"
                className="comments_admin__btn comments_admin__btn--small comments_admin__btn--ghost"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          </div>

          <div className="comments_admin__filters">
            <div className="comments_admin__field comments_admin__field--row">
              <label className="comments_admin__label" htmlFor="filter-status">
                상태
              </label>
              <select
                id="filter-status"
                className="comments_admin__select"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option.value || "all"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <CommentsAdminMenuNav
            areaOptions={areaOptions}
            subSectionOptions={subSectionOptions}
            pageOptions={pageOptions}
            areaFilter={areaFilter}
            subSectionFilter={subSectionFilter}
            pagePathFilter={pagePathFilter}
            onAreaChange={(value) => {
              setAreaFilter(value);
              setSubSectionFilter("");
              setPagePathFilter("");
            }}
            onSubSectionChange={(value) => {
              setSubSectionFilter(value);
              setPagePathFilter("");
            }}
            onPageChange={setPagePathFilter}
          />

          {actionError ? (
            <p className="comments_admin__error" role="alert">
              {actionError}
            </p>
          ) : null}

          <div className="comments_admin__groups">
            {loading ? (
              <p className="comments_admin__status">댓글을 불러오는 중…</p>
            ) : (
              <CommentsListSection
                title={STATUS_LIST_TITLES[statusFilter] ?? "댓글"}
                comments={listPagination.items}
                totalCount={listPagination.totalCount}
                showEmpty
                showStatus={statusFilter !== "pending"}
                emptyMessage={
                  statusFilter === "pending"
                    ? "검수 대기 중인 댓글이 없습니다."
                    : "표시할 댓글이 없습니다."
                }
                pagination={listPagination}
                selectedIds={selectedIds}
                bulkDeleting={bulkDeleting}
                allPageSelected={allPageSelected}
                somePageSelected={somePageSelected}
                onToggleSelect={toggleSelect}
                onToggleSelectPage={toggleSelectPage}
                onPageChange={setListPage}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
                onDeleteSelected={handleDeleteSelected}
                onDeleteAll={handleDeleteAll}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentsAdminPage;
