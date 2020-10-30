import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";
import { UserCreatorService } from "../../service/user-creator.service";

@Component({
  selector: "app-ready-slide",
  templateUrl: "./ready-slide.component.html",
  styleUrls: ["./ready-slide.component.css","../../css/common.css"]
})
export class ReadySlideComponent implements OnInit {
  constructor(private usercreator: UserCreatorService) {}

  ngOnInit() {
    console.log(this.usercreator.getUserData());
  }
}
