import { Subscription } from 'rxjs';
// import { AppInjector } from './app/app-injector.service';
// import { AlertService } from '../component/alert/alert.service';

// service 구현 시 공통되는 영역
export class BaseService {
    private subscriptions: Subscription;

    constructor() {
        // const injector = AppInjector.getInjector();
        // if (injector) {
        //     this.alertService = <AlertService>injector.get(AlertService);
        // }
        this.subscriptions = new Subscription();
    }

    set subscription(value: Subscription) {
        this.subscriptions.add(value);
    }

    destoryed(): void {
        this.subscriptions.unsubscribe();
    }
}
