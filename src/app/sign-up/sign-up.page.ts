import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../_core/auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.page.html',
    styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    public signupForm: FormGroup;
    public loading: any;
    constructor(
        private auth: AuthService,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.signupForm = this.formBuilder.group({
            email: [
                '',
                Validators.compose([Validators.required, Validators.email])
            ],
            password: [
                '',
                Validators.compose([Validators.minLength(6), Validators.required])
            ]
        });
    }

    ngOnInit() {
    }

    async signupUser(signupForm: FormGroup): Promise<void> {
        if (!signupForm.valid) {
            console.log(
                'Need to complete the form, current value: ', signupForm.value
            );
        } else {
            const email: string = signupForm.value.email;
            const password: string = signupForm.value.password;

            this.auth.signup(email, password)
            .then(() => {
                    this.loading.dismiss().then(() => {
                        this.router.navigateByUrl('home');
                    });
                },
                error => {
                    this.loading.dismiss().then(async () => {
                        const alert = await this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }],
                        });
                        await alert.present();
                    });
                }
            );
            this.loading = await this.loadingCtrl.create();
            await this.loading.present();
        }
    }

}
