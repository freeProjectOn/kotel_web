export class Temp {

  datum: string;
  p_tep_ven: number;
  p_tep_uvnitr: number;
  den_spotreba: number;


  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
