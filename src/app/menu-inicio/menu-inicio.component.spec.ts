
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuInicioComponent } from './menu-inicio.component';

describe('MenuInicioComponent', () => {
  let component: MenuInicioComponent;
  let fixture: ComponentFixture<MenuInicioComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MenuInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
