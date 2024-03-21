import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'revfield-polyglot';
  codespacesLink:any='http://3.237.39.249:4200';
  elements:any;
  applicationLink='http://3.237.39.249:4200';
  repoLink:any='https://github.com/PEPLabs/RevField-RevHire.git';

  createLinks(event?:any){
    this.codespacesLink = event.target.value

    if(this.codespacesLink.includes('github')){
      this.repoLink = this.codespacesLink;

    this.elements = this.codespacesLink.split('/')
    console.log(this.elements[4])
    this.applicationLink = `https://`+this.elements[4]+'-4200.app.github.dev/'
    }


  }
  
}