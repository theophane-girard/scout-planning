import { TestBed } from '@angular/core/testing';
import { LANG } from "./lang"

describe('ConfigFile', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should return "Ok"', () => {
        const result: string = LANG.GENERAL.OK;
        expect(result === 'Ok').toBeTruthy();
    });
})