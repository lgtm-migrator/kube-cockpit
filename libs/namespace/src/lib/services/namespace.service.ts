import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Namespace, NamespaceList} from '../models/namespace.model';
import {of} from 'rxjs/observable/of';
import {Subject} from 'rxjs/Subject';
import { environment } from '@env/environment';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class NamespaceService {
  public k8sBaseUrl = environment.K8S_API_BASE_URL;
  globalNamespace = 'all';
  namespace: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) { }
  getNamepaceList(): Observable<any> {
    return this.http.get<Namespace>(`${this.k8sBaseUrl}/api/v1/namespaces`)
      .pipe(
        tap(data => data.items)
      );
  }
  getNamespace(name: string): Observable<Namespace> {
    return this.http.get<Namespace>(`${this.k8sBaseUrl}/api/v1/namespaces/${name}`);
  }
  getGlobalNamespace() {
    return of(this.globalNamespace);
  }
}
