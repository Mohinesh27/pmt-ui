import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";
import { SearchService, AlertService } from "@/services";

@Component({
  selector: "pmt-header",
  templateUrl: "header.component.html"
})
export class HeaderComponent implements OnInit {
  private subscription: Subscription;
  searchForm: FormGroup;
  message: any;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchText: ["", Validators.required]
    });
  }

  get f() {
    return this.searchForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }

    this.loading = true;
    this.searchService
      .search(this.searchForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          // this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
