import { Params } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';

interface GetParamPage {
  pageIndex: number;
  pageSize: number;
}

export const getParamPage = (): OperatorFunction<Params, GetParamPage> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        const pageIndex = params['pageIndex'];
        const pageSize = params['pageSize'];
        return {
          pageIndex: pageIndex ? +pageIndex : 1,
          pageSize: pageSize ? +pageSize : 5,
        };
      }),
    );
  };
};
