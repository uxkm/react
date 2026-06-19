import { getAllPendingCommentSnapshots } from "@/lib/commentOwnership";
import { gulpNavigation } from "@/data/gulpNavigation";
import { getPagePathBreadcrumbs } from "@/lib/pagePathLabels";

export function getPagePathLabel(pagePath) {
  return getPagePathBreadcrumbs(pagePath)?.label ?? pagePath;
}

/** 1·2뎁스(영역·하위 섹션)는 상위 메뉴에서 선택하므로, 페이지 메뉴에는 마지막 2단계만 표시합니다. */
export function getPagePathShortLabel(pagePath) {
  const breadcrumbs = getPagePathBreadcrumbs(pagePath)?.breadcrumbs;
  if (breadcrumbs?.length >= 2) {
    return breadcrumbs.slice(-2).join(" > ");
  }
  return getPagePathLabel(pagePath);
}

export function isPendingComment(comment) {
  const status = String(comment?.status ?? "")
    .trim()
    .toLowerCase();
  if (status === "pending") return true;
  return Boolean(comment?.is_pending);
}

export function normalizeAdminComment(comment) {
  const pagePath = String(comment?.page_path ?? comment?.pagePath ?? "").trim();
  const status = isPendingComment(comment)
    ? "pending"
    : String(comment?.status ?? "approved")
        .trim()
        .toLowerCase();

  return {
    ...comment,
    page_path: pagePath,
    status,
    author_name: String(comment?.author_name ?? "").trim(),
    body: String(comment?.body ?? "").trim(),
    created_at: comment?.created_at ?? new Date().toISOString(),
  };
}

export function mergeAdminCommentsWithPendingSnapshots(comments) {
  const byId = new Map();

  for (const comment of comments ?? []) {
    if (!comment?.id) continue;
    byId.set(comment.id, normalizeAdminComment(comment));
  }

  for (const snapshot of getAllPendingCommentSnapshots()) {
    if (!snapshot?.id) continue;
    const normalized = normalizeAdminComment({
      ...snapshot,
      status: "pending",
      is_pending: true,
    });
    const existing = byId.get(snapshot.id);
    byId.set(
      snapshot.id,
      existing ? { ...existing, ...normalized, status: "pending" } : normalized,
    );
  }

  return [...byId.values()].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  );
}

export function countCommentsByStatus(comments, status) {
  if (status === "pending") {
    return comments.filter((comment) => isPendingComment(comment)).length;
  }
  return comments.filter((comment) => comment.status === status).length;
}

/** page_path 기준으로 댓글을 묶고, 대기 건수·최신순으로 정렬합니다. */
export function groupCommentsByPage(comments) {
  const groups = new Map();

  for (const comment of comments) {
    const pagePath = comment.page_path;
    if (!groups.has(pagePath)) {
      groups.set(pagePath, []);
    }
    groups.get(pagePath).push(comment);
  }

  return [...groups.entries()]
    .map(([pagePath, pageComments]) => {
      const sorted = [...pageComments].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
      const pendingCount = countCommentsByStatus(sorted, "pending");

      return {
        pagePath,
        label: getPagePathLabel(pagePath),
        comments: sorted,
        pendingCount,
        totalCount: sorted.length,
        latestAt: sorted[0]?.created_at ?? null,
      };
    })
    .sort((a, b) => {
      if (a.pendingCount !== b.pendingCount) {
        return b.pendingCount - a.pendingCount;
      }
      return new Date(b.latestAt) - new Date(a.latestAt);
    });
}

/** 댓글이 있는 page_path에서 섹션(prefix) 필터 옵션을 만듭니다. */
export function buildSectionFilterOptions(comments) {
  const prefixes = new Set();

  for (const comment of comments) {
    const segments = comment.page_path.split("/").filter(Boolean);
    if (segments.length >= 2) {
      prefixes.add(`/${segments.slice(0, 2).join("/")}/`);
    }
    if (segments.length >= 3) {
      prefixes.add(`/${segments.slice(0, 3).join("/")}/`);
    }
  }

  return [...prefixes].sort().map((prefix) => ({
    value: prefix,
    label: prefix,
  }));
}

export const COMMENT_AREA_CONFIG = {
  publishing: { label: "Publishing", prefix: "/publishing/" },
  accessibility: { label: "A11Y", prefix: "/accessibility/" },
  "build-system": { label: "Gulp", prefix: "/build-system/" },
  updates: { label: "Updates", prefix: "/updates/" },
};

const ACCESSIBILITY_GROUP_LABELS = {
  a11y: "A11Y",
  waiAria: "WAI-ARIA",
  a11yCreationTech: "A11y Creation Tech",
};

export function getCommentAreaKey(pagePath) {
  const segments = String(pagePath ?? "")
    .split("/")
    .filter(Boolean);
  const first = segments[0];

  if (first === "publishing") return "publishing";
  if (first === "accessibility") return "accessibility";
  if (first === "build-system") return "build-system";
  if (first === "updates") return "updates";
  return first ? "other" : "";
}

export function getSubSectionMenuLabel(prefix) {
  const segments = prefix.split("/").filter(Boolean);

  if (segments[0] === "publishing" && segments[1]) {
    if (segments[1] === "html") return "HTML";
    if (segments[1] === "css") return "CSS";
    if (segments[1] === "scss") return "SCSS";
    return segments[1].toUpperCase();
  }

  if (segments[0] === "accessibility" && segments[1]) {
    return ACCESSIBILITY_GROUP_LABELS[segments[1]] ?? segments[1];
  }

  if (segments[0] === "build-system" && segments[1] === "gulp") {
    if (segments[2]) {
      const section = gulpNavigation.find((item) => item.key === segments[2]);
      return section?.title ?? segments[2];
    }
    return "Gulp";
  }

  if (segments.length >= 2) {
    return (
      getPagePathLabel(`/${segments.slice(0, 2).join("/")}`) ?? segments[1]
    );
  }

  return prefix;
}

function getSubSectionPrefix(pagePath, areaKey) {
  const segments = String(pagePath ?? "")
    .split("/")
    .filter(Boolean);

  if (areaKey === "publishing" && segments.length >= 2) {
    return `/${segments.slice(0, 2).join("/")}/`;
  }

  if (areaKey === "accessibility" && segments.length >= 2) {
    return `/${segments.slice(0, 2).join("/")}/`;
  }

  if (areaKey === "build-system" && segments.length >= 3) {
    return `/${segments.slice(0, 3).join("/")}/`;
  }

  if (segments.length >= 2) {
    return `/${segments.slice(0, 2).join("/")}/`;
  }

  return "";
}

export function buildAreaMenuOptions(comments) {
  const counts = new Map();

  for (const comment of comments) {
    const key = getCommentAreaKey(comment.page_path);
    if (!key) continue;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  const options = [{ value: "", label: "전체" }];

  for (const [key, config] of Object.entries(COMMENT_AREA_CONFIG)) {
    if (!counts.has(key)) continue;
    options.push({
      value: key,
      label: config.label,
    });
  }

  if (counts.has("other")) {
    options.push({ value: "other", label: "기타" });
  }

  return options;
}

export function buildSubSectionMenuOptions(comments, areaKey) {
  if (!areaKey) return [];

  const prefixCounts = new Map();

  for (const comment of comments) {
    if (getCommentAreaKey(comment.page_path) !== areaKey) continue;
    const subPrefix = getSubSectionPrefix(comment.page_path, areaKey);
    if (!subPrefix) continue;
    prefixCounts.set(subPrefix, (prefixCounts.get(subPrefix) ?? 0) + 1);
  }

  if (prefixCounts.size === 0) return [];

  const options = [{ value: "", label: "전체" }];

  for (const [prefix] of [...prefixCounts.entries()].sort((a, b) =>
    getSubSectionMenuLabel(a[0]).localeCompare(
      getSubSectionMenuLabel(b[0]),
      "ko",
    ),
  )) {
    options.push({
      value: prefix,
      label: getSubSectionMenuLabel(prefix),
    });
  }

  return options;
}

export function resolveSectionPrefix(areaKey, subSectionPrefix) {
  if (subSectionPrefix) return subSectionPrefix;
  if (!areaKey) return "";

  const config = COMMENT_AREA_CONFIG[areaKey];
  if (config?.prefix) return config.prefix;

  return "";
}

export function buildPageFilterOptions(comments) {
  const pathCounts = new Map();

  for (const comment of comments) {
    const pagePath = comment.page_path;
    pathCounts.set(pagePath, (pathCounts.get(pagePath) ?? 0) + 1);
  }

  return [...pathCounts.keys()]
    .sort((a, b) =>
      getPagePathShortLabel(a).localeCompare(getPagePathShortLabel(b), "ko"),
    )
    .map((pagePath) => {
      const count = pathCounts.get(pagePath) ?? 0;
      return {
        value: pagePath,
        label: getPagePathShortLabel(pagePath),
        count,
      };
    });
}

export function filterComments(comments, { sectionPrefix, pagePath }) {
  let filtered = comments;

  if (sectionPrefix) {
    filtered = filtered.filter((comment) =>
      comment.page_path.startsWith(sectionPrefix),
    );
  }

  if (pagePath) {
    filtered = filtered.filter((comment) => comment.page_path === pagePath);
  }

  return filtered;
}

export const ADMIN_COMMENTS_PAGE_SIZE = 20;

export function paginateList(items, page, pageSize = ADMIN_COMMENTS_PAGE_SIZE) {
  const totalCount = items.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize) || 1);
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    totalCount,
    totalPages,
    page: safePage,
    pageSize,
    hasPrev: safePage > 1,
    hasNext: safePage < totalPages,
    rangeStart: totalCount === 0 ? 0 : start + 1,
    rangeEnd: Math.min(start + pageSize, totalCount),
  };
}
