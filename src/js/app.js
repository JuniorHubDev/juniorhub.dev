import axios from "axios";
import {disableForm,resetForm} from "./formHelper/formHelper";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://wt-3652123198c9c0acc205c1e1e15a38ca-0.sandbox.auth0-extend.com'
});



const app = {

  init() {
    this.inviteForm();
  },

  inviteForm() {
    const inviteForm = document.querySelector(".js-invite-form");

    if(!inviteForm) {
      return;
    }

    inviteForm.addEventListener("submit", function(event) {
      event.preventDefault();
      instance.post("/slack-inviter-poster", {
        "name": inviteForm.querySelector("[name=name]").value,
        "email": inviteForm.querySelector("[name=email]").value,
        "experience_level": inviteForm.querySelector("[name=experience_level]").value,
        "reason_for _joining": inviteForm.querySelector("[name=reason_for_joining]").value
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(() => {
        disableForm(inviteForm);
        setTimeout(()=>{
          alert("Thank you, your form has been sent, your Slack invite will be emailed to you shortly!");
          resetForm(inviteForm);
        },1500);
      });
    })
  }
}

app.init();
