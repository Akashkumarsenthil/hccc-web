import {Injectable} from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take, delayWhen} from 'rxjs/operators';

import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';

@Injectable({
    providedIn: 'root'
})
export class CourseListResolveService implements Resolve<Course[]> {

    constructor(private apiService: YandeApiService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course[]> {
        // TODO: The below delay is intentionally introduced to demonstrated spinners for perceived performance. Remove later.
        const intentionalDelay = () => timer(1000);
        return this.apiService.getCourses().pipe(
            delayWhen(intentionalDelay),
            take(1),
            map(courses => {
                if (courses) {
                    return courses;
                } else {
                    this.router.navigate(['/page-not-found']);
                    return null;
                }
            })
        );
    }
}
