import './routeLoadingFallback.scss'

export default function RouteLoadingFallback() {
	return (
		<main
			className="route_loading_fallback"
			role="status"
			aria-live="polite"
			aria-busy="true"
		>
			<div className="route_loading_fallback__inner">
				<span className="route_loading_fallback__spinner" aria-hidden="true" />
				<span className="route_loading_fallback__visually_hidden">페이지를 불러오는 중</span>
			</div>
		</main>
	)
}
