import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // data_skills() {
  //   let skills = [
  //     {
  //       titulo: "FRONTEND",
  //       img: [
  //         {
  //           url: "https://i.imgur.com/9ostmpC.png",
  //           porcentage: "90",
  //           background: ["#eb8b5e"],
  //           name: "HTML",
  //           description: "Markup language. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/uigtsvJ.png",
  //           porcentage: "80",
  //           background: ["#bfcdff"],
  //           name: "CSS",
  //           description: "Styling language. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/JtLGXFz.png",
  //           porcentage: "80",
  //           background: ["#ffd200"],
  //           name: "JS",
  //           description: "Scripting language. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/8l6yvWR.png",
  //           porcentage: "40",
  //           background: ["#ffc6e8"],
  //           name: "Bootstrap",
  //           description: "Frontend framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/QkHCBLF.png",
  //           porcentage: "70",
  //           background: ["#277eff"],
  //           name: "jquery",
  //           description: "JavaScript library. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         }
  //       ]
  //     },
  //     {
  //       titulo: "BACKEND",
  //       img: [
  //         {
  //           url: "https://i.imgur.com/UigWEKL.png",
  //           porcentage: "70",
  //           background: ["#4d4e88"],
  //           name: "php",
  //           description: "Server-side scripting language. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/UF8iznt.png",
  //           porcentage: "80",
  //           background: ["#4da7f1"],
  //           name: "python",
  //           description: "Server-side scripting language. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/8Ps1rue.png",
  //           porcentage: "60",
  //           background: ["#97c792"],
  //           name: "node",
  //           description: "Runtime environment. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         }
  //       ]
  //     },
  //     {
  //       titulo: "FRAMEWORKS",
  //       img: [
  //         {
  //           url: "https://i.imgur.com/oc09UDJ.png",
  //           porcentage: "60",
  //           background: ["#ffbfb5"],
  //           name: "laravel",
  //           description: "PHP framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/lN1Nz46.png",
  //           porcentage: "80",
  //           background: ["#ff888b"],
  //           name: "angular",
  //           description: "Frontend framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/Bev1pIh.png",
  //           porcentage: "60",
  //           background: ["#012a35"],
  //           name: "react",
  //           description: "JavaScript library for building user interfaces. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/TcK29dV.png",
  //           porcentage: "80",
  //           background: ["#aaaebb"],
  //           name: "flask",
  //           description: "Python micro web framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         }
  //       ]
  //     },
  //     {
  //       titulo: "DATABASE",
  //       img: [
  //         {
  //           url: "https://i.imgur.com/hKwsTJO.png",
  //           porcentage: "80",
  //           background: ["#e7f2ff"],
  //           name: "mysql",
  //           description: "Relational database management system. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/rODMeIK.png",
  //           porcentage: "80",
  //           background: ["#c8ffd4"],
  //           name: "mongo",
  //           description: "NoSQL database program. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         }
  //       ]
  //     },
  //     {
  //       titulo: "OTROS",
  //       img: [
  //         {
  //           url: "https://i.imgur.com/hgIDUXy.png",
  //           porcentage: "90",
  //           background: ["#ffffff"],
  //           name: "jupyter",
  //           description: "Python micro web framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/oXYhDTP.png",
  //           porcentage: "80",
  //           background: ["#ffafbd"],
  //           name: "streamlit",
  //           description: "Python micro web framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/yTOyd53.png",
  //           porcentage: "60",
  //           background: ["#bfcdff"],
  //           name: "pandas",
  //           description: "Python micro web framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/sNx0R94.png",
  //           porcentage: "60",
  //           background: ["#97def9"],
  //           name: "numpy",
  //           description: "Lorem ipsum"
  //         },
  //         {
  //           url: "https://i.imgur.com/Opw3ZsY.png",
  //           porcentage: "30",
  //           background: ["#bfffd1"],
  //           name: "kafka",
  //           description: "Python micro web framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         },
  //         {
  //           url: "https://i.imgur.com/8O62lkG.png",
  //           porcentage: "50",
  //           background: ["#ffce9a"],
  //           name: "scikits.learn",
  //           description: "Python micro web framework. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
  //         }
  //       ]
  //     }
  //   ];

  //   return skills
  // }




  todos_los_proyectos(){
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


  proyectos_destacados(){
    let projects = [ 
      {'id':0, 'archivo':'https://i.imgur.com/Ifzacz3.png', 'texto1':'Conecta X' , 'texto2':'FRONTEND' , 'link':'https://maikol2503.github.io/Juego-conecta-X/'},
      {'id':1, 'archivo':'https://i.imgur.com/qTC9TpS.png', 'texto1':'Group generator' , 'texto2':'FRONTEND' , 'link':'https://maikol2503.github.io/GeneradorDeGrupos/'},
      {'id':2, 'archivo':'https://i.imgur.com/mMKogfm.png', 'texto1':'Afrobook' , 'texto2':'FRONTEND' , 'link':'https://afrodbook.000webhostapp.com/FRONTEND/index.html'},
      {'id':3, 'archivo':'https://i.imgur.com/bjTtoEK.png', 'texto1':'Danza Fenix' , 'texto2':'BACKEND' , 'link':'https://even-fireplace-782.notion.site/Fenix-Api-d3a1d099b0f04c628d3639338472dffa'},
      {'id':4, 'archivo':'https://i.imgur.com/qwcViBn.png', 'texto1':'Magica' , 'texto2':'BACKEND' , 'link':'https://github.com/ispipa/Majica-Project'}
    ];

    return projects
  }


  data_skills() {
    let skills = [
        {
          logo: 'https://i.imgur.com/NY9613k.png',
          titulo: 'Frontend',
          skills: 'HTML, CSS, JavaScript, Bootstrap, jQuery'
        },
        {
          logo: 'https://imgur.com/rGMGudU.png',
          titulo: 'Backend',
          skills: 'PHP, Node, Python'
        },
        {
          logo: 'https://imgur.com/x3zodG2.png',
          titulo: 'Database',
          skills: 'MySQL, MongoDB'
        },
        {
          logo: 'https://imgur.com/jnluudO.png',
          titulo: 'Frameworks',
          skills: 'Angular, React, Laravel, Flask'
       },
       {
          logo: 'https://imgur.com/ZGA1fYq.png',
          titulo: 'Machine Learn',
          skills: 'Scikit-Learn, NumPy, Pandas, streamlit, jQuery, Microsoft Azure Machine Learning, Jupyter Notebooks'
       }
       
      //  {
      //     logo: '',
      //     titulo: 'Otros',
      //     skills: 'HTML, CSS, JavaScript, Bootstrap, jQuery'
      //  }
    ];




    return skills;
}


}