import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/api/users`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/api/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/api/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${config.apiUrl}/api/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/api/users/${id}`);
    }
}