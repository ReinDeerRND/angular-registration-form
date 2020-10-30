import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";
import { UserCreatorService } from "../../service/user-creator.service";

@Component({
  selector: "app-contacts-slide",
  templateUrl: "./contacts-slide.component.html",
  styleUrls: ["./contacts-slide.component.css","../../css/common.css"]
})
export class ContactsSlideComponent implements OnInit {
  email: string;
  phone: string;
  address: string;
  datetime: Date;

  constructor(private usercreator: UserCreatorService) {}
  ngOnInit() {
    this.datetime = new Date();
  }
  addContacts() {
    this.usercreator.setContacts(
      this.email,
      this.phone,
      this.address,
      this.datetime
    );
  }
}
