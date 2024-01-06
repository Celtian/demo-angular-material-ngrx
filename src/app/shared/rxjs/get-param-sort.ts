import { Params } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';
import { PostDto } from '../dto/post.dto';

interface GetParamSort {
  sortBy: keyof PostDto;
  sortDirection: 'asc' | 'desc';
}

export const getParamSort = (): OperatorFunction<Params, GetParamSort> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        return {
          sortBy: (params['sortBy'] || 'id') as keyof PostDto,
          sortDirection: (params['sortDirection'] || 'asc') as 'asc' | 'desc',
        };
      }),
    );
  };
};
