import { TestBed } from '@angular/core/testing';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  let service: ConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversorService);
  });

  it('should be created', () => {
    service.converter({
      moedaDe: 'BRL',
      moedaPara: 'USD',
      valor: 20
    }).subscribe({
      complete: console.log,
      next: console.log,
      error: console.log
    })
    
    expect(service).toBeTruthy();
  });
});
