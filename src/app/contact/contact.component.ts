import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // /**
  //  * This is bind to ngForm's InputFields in Template File
  //  */
  //  contact = {
  //   name: '', //Bind  to InputField name="name"
  //   email: '', //Bind to InputField name="email"
  //   message: '', //Bind to InputField name="message"
  // };

  // /**
  //  * A post request construct configuration
  //  */
  //  post = {
  //   // Where to send the post request Ex. https://valentinakuxhausen.com/sendMail.php if you have SSL-Certificate Active
  //   endPoint: '',
  //   // What to send, notice JSON.stringify
  //   body: (payload: any) => JSON.stringify(payload),
  //   // How to send, notice Content-Type and responseType
  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       responseType: 'text',
  //     },
  //   },
  // };

  @ViewChild('contactForm') contactForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Do not forget to import FormsModule in app.module.ts
   */
   onSubmit() {
    // https://w01cc74e.kasserver.com/valentinakuxhausen.com/send_mail.php
    console.log('sending mail', this.contactForm);
    // if (ngForm.submitted && ngForm.form.valid) {
    //   this.http
    //     .post(this.post.endPoint, this.post.body(this.contact))
    //     .subscribe({
    //       next: (response) => console.log(response),
    //       error: (error) => console.error(error),
    //       complete: () => console.info('send post complete'),
    //     });
    // }
  }

}
