import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Search } from '@/models';

@Injectable({ providedIn: 'root' })
export class SearchService {
    constructor(private http: HttpClient) { }

    search(search: Search) {
        return this.http.post(`${config.apiUrl}/api/search/`, search);
    }

}