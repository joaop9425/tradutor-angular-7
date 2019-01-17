import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html', /** Esse parametro (metadado) é o apontamento do arquivo externo */
  // template: `<p>Teste</p>` /** Uso do template, porem Inline usa crase para poder quebrar linha */
  // styles: [' .exemplo { color : blue; } '] /** Atributo inline. */
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {
  public titulo: String = 'Aprendendo Inglês';
}
