import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component ({
    moduleId: module.id,
    selector: 'contact-us-form',
    styleUrls: ['./contact-us.component.css'],
    templateUrl: './contact-us.component.html'
})

export class ContactUsComponent {

    contactUsForm: FormGroup;

    constructor( private formBuilder: FormBuilder) { 
        this.createForm();
    }

    createForm(): void {
        this.contactUsForm = this.formBuilder.group({
            firstName: [new Date(), Validators.required],
            lastName: ['', Validators.required],
            companyName: ['', Validators.required],
            email: [null, Validators.required],
            phoneNumber: [''],
            message: ['', Validators.required]
        });
    };
}