import { Params } from '@angular/router';
import { OperatorFunction, map } from 'rxjs';

export const getParamQuery = (): OperatorFunction<Params, string> => {
  return (input$) => {
    return input$.pipe(
      map((params) => {
        return params['query'] || '';
      }),
    );
  };
};
