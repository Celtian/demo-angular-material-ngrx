import { OperatorFunction, filter, map } from 'rxjs';

export const filterNumber = (): OperatorFunction<number | null, number> => {
  return (input$) => {
    return input$.pipe(
      filter((id) => typeof id === 'number'),
      map((id) => Number(id)),
    );
  };
};
