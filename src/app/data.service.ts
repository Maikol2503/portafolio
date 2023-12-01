import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data_skills(){
    let skills = [{ titulo:"FRONTEND", 
              img:[{
                    url:"https://i.imgur.com/9ostmpC.png", 
                    porcentage: "90%" ,
                    background:["#eb8b5e"],
                    name:'html'
                  },
                  {
                    url:"https://i.imgur.com/uigtsvJ.png", 
                    porcentage: "80%", 
                    background:["#bfcdff"],
                    name:'css'
                   },
                  {
                    url:"https://i.imgur.com/JtLGXFz.png",
                    porcentage: "80%" ,
                    background:["#ffd200"],
                    name:'javascript'
                  },
                  {
                    url:"https://i.imgur.com/8l6yvWR.png", 
                    porcentage: "40%", 
                    background:["#ffc6e8"],
                    name:'bootstrap'
                  }, 
                  {
                      url:"https://i.imgur.com/QkHCBLF.png", 
                      porcentage: "70%" ,
                      background:["#277eff"],
                      name:'jquery'
                  }]}, 
            { titulo:"BACKEND", 
              img:[{
                    url:"https://i.imgur.com/UigWEKL.png", 
                    porcentage: "70%" ,
                    background:["#4d4e88"],
                    name:'php'
                  },
                  {
                    url:"https://i.imgur.com/UF8iznt.png", 
                    porcentage: "80%", 
                    background:["#4da7f1"],
                    name:'python'
                  }, 
                  {
                    url:"https://i.imgur.com/8Ps1rue.png", 
                    porcentage: "60%" ,
                    background:["#97c792"],
                    name:'node'
                  }]},
            { titulo:"DATABASE", 
              img:[{url:"https://i.imgur.com/hKwsTJO.png", 
                    porcentage: "80%" ,
                    background:["#e7f2ff"],
                    name:'mysql'
                  },
                  {
                    url:"https://i.imgur.com/rODMeIK.png", 
                    porcentage: "80%", 
                    background:["#c8ffd4"],
                    name:'mongo'
                  }]
            },
            { titulo:"FRAMEWORKS", 
              img:[{
                    url:"https://i.imgur.com/oc09UDJ.png", 
                    porcentage: "60%" ,
                    background:["#ffbfb5"],
                    name:'laravel'
                  },
                  {
                    url:"https://i.imgur.com/lN1Nz46.png", 
                    porcentage: "80%", 
                    background:["#ff888b"],
                    name:'angular'
                  },
                  {
                    url:"https://i.imgur.com/Bev1pIh.png", 
                    porcentage: "60%", 
                    background:["#012a35"],
                    name:'react'
                  },
                  {
                    url:"https://i.imgur.com/TcK29dV.png", 
                    porcentage: "80%", 
                    background:["#aaaebb"],
                    name:'flask'
                  }]
            },
            { titulo:"OTROS", 
              img:[{
                    url:"https://i.imgur.com/hgIDUXy.png", 
                    porcentage: "90%" ,
                    background:["#ffffff"],
                    name:'jupyter'
                    },
                    {
                      url:"https://i.imgur.com/oXYhDTP.png", 
                      porcentage: "80%", 
                      background:["#ffafbd"],
                      name:'streamlit'
                    },
                    {
                      url:"https://i.imgur.com/yTOyd53.png", 
                      porcentage: "60%", 
                      background:["#bfcdff"],
                      name:'pandas'
                    },
                    {
                      url:"https://i.imgur.com/sNx0R94.png", 
                      porcentage: "60%", 
                      background:["#97def9"],
                      name:'numpy'
                    }, 
                    {
                      url:"https://i.imgur.com/Opw3ZsY.png", 
                      porcentage: "30%", 
                      background:["#bfffd1"],
                      name:'kafka'
                    }, 
                    {
                      url:"https://i.imgur.com/8O62lkG.png", 
                      porcentage: "50%", 
                      background:["#ffce9a"],
                      name:'scikits.learn'
                    }
                  ]
             },
           ]

    return skills
  }




  projects(){
    let projects = [
      {id:1, titulo:"Magica", subtitulo:"subtitulo", detalle:"detalle del proyecto 1", img:"../../", link:"https://www.youtube.com/watch?v=aBeSC3SYFOs&t=2s"},
      {id:2, titulo:"Lista de la compra", subtitulo:"subtitulo", detalle:"detalle del proyecto 2", img:"../../", link:"https://maikol2503.github.io/ListaDeLaCompraGrupo3/"},
      {id:3, titulo:"Airlines", subtitulo:"subtitul", detalle:"detalle del proyecto 3", img:"../../", link:"https://github.com/AI-School-F5-P2/proyecto_airlines_equipo_2"},
      {id:4, titulo:"Afrobook", subtitulo:"subtitulo", detalle:"detalle del proyecto 4", img:"../../", link:"https://afrodbook.000webhostapp.com/FRONTEND/index.html"},
      {id:5, titulo:"Generados de grupos", subtitulo:"subtitulo", detalle:"detalle del proyecto 5", img:"../../", link:"https://maikol2503.github.io/GeneradorDeGrupos/"},
      {id:6, titulo:"Conecta x", subtitulo:"subtitulo", detalle:"detalle del proyecto 6", img:"../../", link:"https://maikol2503.github.io/Juego-conecta-X/"},
      {id:7, titulo:"Calculadora", subtitulo:"subtitulo", detalle:"detalle del proyecto 7", img:"../../", link:"https://maikol2503.github.io/calculadora/"},
      {id:8, titulo:"Taximetro", subtitulo:"subtitulo", detalle:"detalle del proyecto 8", img:"../../", link:"https://github.com/AI-School-F5-P2/grupo_3_proyecto_taxi"},
      {id:9, titulo:"Rock-paper-scissors", subtitulo:"subtitulo", detalle:"detalle del proyecto 9", img:"../../", link:"https://maikol2503.github.io/PiedraPapelTijera/"},
    ]
    return projects
  }

  
}
