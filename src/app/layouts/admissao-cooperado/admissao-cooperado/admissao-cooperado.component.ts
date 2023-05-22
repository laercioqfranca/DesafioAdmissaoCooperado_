import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InfoCooperadoApiRest } from 'src/app/models/infoCooperado-api-rest';
import { InfoCooperadoData } from 'src/app/models/infoCooperadoData';
import { InfoCooperadoApiRestService } from 'src/app/services/infoCooperado-api-rest.service';
import { FuncoesGerais } from 'src/app/shared/utils/funcoesGerais';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admissao-cooperado',
  templateUrl: './admissao-cooperado.component.html',
  styleUrls: ['./admissao-cooperado.component.css']
})
export class AdmissaoCooperadoComponent {
  public formConsultar: any;
  public objInfoCooperadoApiRest: any;
  public dados = false;

  get cpf() { return this.formConsultar.controls['cpf'] };

  constructor(
    private fb: FormBuilder,
    private infoCooperadoApiRestService: InfoCooperadoApiRestService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formConsultar = this.fb.group({
      cpf: ['', [Validators.required, FuncoesGerais.isValidCpf, Validators.minLength(11), Validators.maxLength(12)]]

    });
  }

  consultar() {
    this.dados = false;
    if (this.formConsultar.valid) {
      this.getInfoCooperadoApi();
    }
    else {
      Swal.fire({
        title: 'CPF Inválido!',
        text: 'O CPF inserido não é valido.',
        icon: 'error'
      });
    }
  }

  getInfoCooperadoApi() {
    this.infoCooperadoApiRestService.getInfoCooperadoApiRest().subscribe((result: InfoCooperadoApiRest) => {
      var obj = result.data.filter(x => x.cpf === this.cpf.value)[0];
      if (obj !== undefined) {
        this.objInfoCooperadoApiRest = new InfoCooperadoData(obj);
        this.dados = true;
        console.log(result);
      }
      else {
        Swal.fire({
          title: 'CPF não encontrado!',
          text: 'O CPF inserido não foi encontrado.',
          icon: 'info'
        });
      }
    });
  }
}
