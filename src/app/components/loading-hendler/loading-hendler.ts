import { BehaviorSubject, delay, Observable, of, switchMap } from 'rxjs';

export class LoadingHendler {
  private _isLoading$ = new BehaviorSubject(false);

  isLoading$: Observable<boolean> = this._isLoading$.pipe(
    switchMap((isLoading) => (!isLoading ? of(false) : of(true).pipe(delay(500))))
  );
  start() { this._isLoading$.next(true) }
  finish() { this._isLoading$.next(false) }
}
