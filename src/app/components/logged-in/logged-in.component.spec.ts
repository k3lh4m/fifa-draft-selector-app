import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { LoggedInComponent } from './logged-in.component';

describe('LoggedInComponent', () => {
  let testHostFixture: ComponentFixture<TestHostComponent>,
		loggedIn: DebugElement;

  @Component({
    template: `<logged-in></logged-in>`
  })
  class TestHostComponent {
  }

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        LoggedInComponent
      ]
    }).compileComponents().then(() => {
      testHostFixture = TestBed.createComponent(TestHostComponent);
			loggedIn = testHostFixture.debugElement.query(By.directive(LoggedInComponent));
    });
  }));
});