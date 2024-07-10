import {Subscription} from "rxjs";
import {Injectable, OnDestroy} from "@angular/core";

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }

  addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}
