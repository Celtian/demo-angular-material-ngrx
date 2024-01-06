import { getRouterSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { PostDto } from './shared/dto/post.dto';

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectRouteDataParam, // factory function to select a route data param
  selectUrl, // select the current url
  selectTitle, // select the title if available
} = getRouterSelectors();

export const selectPaginationParams = createSelector(selectQueryParams, (params) => {
  const pageIndex = params['pageIndex'];
  const pageSize = params['pageSize'];

  return {
    query: String(params['query'] || ''),
    pageIndex: pageIndex ? +pageIndex : 1,
    pageSize: pageSize ? +pageSize : 5,
    sortBy: (params['sortBy'] || 'id') as keyof PostDto,
    sortDirection: (params['sortDirection'] || 'asc') as 'asc' | 'desc',
  };
});

export const selectPostId = createSelector(selectRouteParams, (params) => {
  const id = params['id'];
  return id ? +id : null;
});
