import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import '../CSS/Home.css';
import '../CSS/Listas_objetos.css';
import '../CSS/Navbar.css';
import '../CSS/Color.css';
import { DeleteOutline, HorizontalSplit} from "@material-ui/icons";
import { DataGrid,GridToolbarExport,GridToolbarContainer,GridToolbarColumnsButton,GridToolbarFilterButton,
         GridToolbarDensitySelector,
} from "@material-ui/data-grid";
import SideBar from "../SideBar";
import {getIntVerbal,getIntMatematica,getIntVisualEspacial,getIntNaturalista,getIntRitmicoMusical,
         getIntkinesico_corporal,getIntIntraPersonal,getIntInterPersonal} from "./Programas.js";
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { Button} from '@mui/material';
import ReactDOMServer from "react-dom/server";
import Test  from "./Test.js";


const URI = 'http://localhost:5000/resultados/'


export default function CompShowResultadosF  ()  {


  const [resultados, setResultado] = useState([]);
  const navigate = useNavigate()
  const {codigo_test} = useParams()
  

  useEffect( ()=>{
    getResultado()
      },[])


    //procedimiento para mostrar todos los resultados
    const getResultado = async () => {
      const res = await axios.get(URI+ codigo_test);
      setResultado(res.data)
      }
 

    //procedimiento para eliminar un resultado
   const deleteResultado = async (id) => {
    await axios.delete(`${URI}${id}`)
    getResultado()
    }


  //Configurar las columnas para Datatable

  const columns = [
    
    {field: "num_documento", headerName: "Documento",width: 120,},
    {field: "nombre_completo", headerName: "Nombre completo", width: 180,},
    {field: "codigo_test", headerName: "Código Único", width: 200, },
    {field: "grado", headerName: "Grado", width: 160,},
    {field: "colegio", headerName: "Colegio", width: 160,},
    {field: "programa_pre1", headerName: "Programa de interés", width: 160,},
    {field: "programa_pre2", headerName: "Programa de interés", width: 160,},
    {field: "puntos_verbal", headerName: "Int Verbal", width: 160, 
    
    cellClassName: (params) => {
      return ( getIntVerbal(params.row.programa_pre1,params.row.puntos_verbal));
    },},
   
    {field: "puntos_matematica", headerName: "Int Matemática", width: 160,
    cellClassName: params => {
      return ( getIntMatematica(params.row.programa_pre1,params.row.puntos_matematica));
    }
  
    },
    {field: "puntos_visual_espacial", headerName: "Int visual espacial", width: 160,
    cellClassName: params => {
      return ( getIntVisualEspacial(params.row.programa_pre1,params.row.puntos_visual_espacial));
    }
    },
    {field: "puntos_naturalista", headerName: "Int naturalista", width: 160,
    cellClassName: params => {
      return ( getIntNaturalista(params.row.programa_pre1,params.row.puntos_naturalista));
    }
    },
    {field: "puntos_kinesico_corporal", headerName: "Int kinésico corporal", width: 160,
    cellClassName: params => {
      return ( getIntkinesico_corporal(params.row.programa_pre1,params.row.puntos_kinesico_corporal));
    }
    },
    {field: "puntos_ritmico_musical", headerName: "Int rítmico musical", width: 160,
    cellClassName: params => {
      return ( getIntRitmicoMusical(params.row.programa_pre1,params.row.puntos_ritmico_musical));
    }
    },
    {field: "puntos_intrapersonal", headerName: "Int intrapersonal", width: 160,
    cellClassName: params => {
      return ( getIntIntraPersonal(params.row.programa_pre1,params.row.puntos_intrapersonal));
    }
    },
    {field: "puntos_interpersonal", headerName: "Int interpersonal", width: 160,
    cellClassName: params => {
      return ( getIntInterPersonal(params.row.programa_pre1,params.row.puntos_interpersonal));
    }
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline 
              onClick={() => deleteResultado(params.row.id)}
            />
          </>
        );
      },
    },

  ];


  const downloadPdf = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    //debugger;

    const doc = new jsPDF(orientation, unit, size)
    doc.setFontSize(12);
    doc.setFont("Segoe UI");
    console.log([resultados[0].colegio], "ver dato");
    console.log([resultados[0].createdAt], "ver dato2");

    doc.text("Santiago de Cali, ", 40, 70)
    doc.text([resultados[0].createdAt], 125, 70)
    doc.text("Colegio ", 40, 85)
    doc.text([resultados[0].colegio], 40, 100)
    doc.text("Ciudad ", 40, 115)
    doc.text("Cordial Saludo, ", 40, 160)

    doc.addPage();
    doc.addPage();
    doc.addPage();

    var columnasArea1 =  ["Matemáticas y ciencias naturales"]
    var dataArea1 =[
                          ["Biología, Microbiología y a fines"],
                          ["Física"], ["Matemática, estadística y afines"],
                          ["Química y a fines"]
                  ]
 
      doc.autoTable(columnasArea1, dataArea1,

        { margin:{ top: 40 },

        columnStyles: { 0: {
            cellPadding: 0.5
          }, 1: {
            cellWidth: 'center',
            cellPadding: 1
          }
        }
        })

    var columnasArea2 =  ["Agronomía, veterinaria y a fines"]
    var dataArea2 =[
                          ["Agronomía"],
                          ["Medicina veterinaria"]
                  ]
      doc.autoTable(columnasArea2, dataArea2,

        { margin:{ top: 80 },

        columnStyles: { 0: {
            cellPadding: 0.5
          }, 1: {
            cellWidth: 'center',
            cellPadding: 1
          }
        }
        })
    var columnasArea3 =  ["Ciecias de la educación"]
    var dataArea3 =[
                         ["Educación"]
                      ]
      doc.autoTable(columnasArea3, dataArea3,
  
            { margin:{ top: 100 },
  
            columnStyles: { 0: {
                cellPadding: 0.5
              }, 1: {
                cellWidth: 'center',
                cellPadding: 1
              }
            }
            })
    var columnasArea4 =  ["Economía, Administración, contaduría y a fines"]
    var dataArea4 =[
                         ["Administración"], ["Contabilidad"], ["Economía"]
                              ]
      doc.autoTable(columnasArea4, dataArea4,
          
            { margin:{ top: 100 },
          
            columnStyles: { 0: {
                cellPadding: 0.5
                }, 1: {
                cellWidth: 'center',
                cellPadding: 1
                }
                }
                })
    var columnasArea5 =  ["Ciencias sociales y humanas"]
    var dataArea5 =[
                         ["Antropología y artes liberales"], ["Bibliotecología"], ["Ciencias políticas y relaciones internacionales"],
                         ["Comunicación social, periodismo y a fines"], ["Deporte, educación, física yrecreación"], ["Derecho"],
                         ["Filosofía, teología y a fines"], ["Formación militar o policíal"], ["Historia y geografía"],
                         ["Lenguas modernas, linguística, literatura y a fines"], ["Psicología"], ["Sociología, trabajo social"],
                        ]
      doc.autoTable(columnasArea5, dataArea5,
                      
            { margin:{ top: 100 },
                      
            columnStyles: { 0: {
                cellPadding: 0.5
                }, 1: {
                cellWidth: 'center',
                cellPadding: 1
                }
                }
                })

    var columnasArea6 =  ["Ingeniería, Arquitectura, urbanismo y a fines"]
    var dataArea6 =[
                         ["Arquitectura"], ["Ingeniería agrícola, forestal y afines"], ["Ingeniería agroindustrial, de alimentos y a fines"],
                         ["Ingeniería agronómica, sanitaria y afines"], ["Ingeniería ambiental, sanitaria y a fines"], ["Ingeniería biomédica y a fines"],
                         ["Ingeniería civil y afines"], ["Ingeniería de minas, metalúrgica y a fines"], ["Ingeniería de sistemas, telemática y a fines"],
                         ["Ingeniería eléctrica y a fines"], ["Ingeniería electrónica, telecomunicaciones y a fines"], ["Ingeniería industrial y a fines"], ["Ingeniería mecánica y a fines"], ["Ingeniería química y a fines"],
                         ["Otras ingenierías"]
                    ]

      doc.autoTable(columnasArea6, dataArea6,
                                  
          { margin:{ top: 100, lef:100, startY: 150, startX: 150, finallyY:150 },
                                  
          columnStyles: { 0: {
                cellPadding: 0.5
                }, 1: {
                cellWidth: 'center',
                cellPadding: 1
                }
                }
                })
  var columnasArea7 =  ["Ciencias de la salud"]
  var dataArea7 =[
                         ["Bacteriología"], ["Enfermería"], ["Instrumentación quirúrgica"],
                         ["Medicina"], ["Nutrición dietética"], ["Odontología"],
                         ["Optometría"], ["Terapias"]
                       ]
          
      doc.autoTable(columnasArea7, dataArea7,
                                              
        { margin:{ top: 100, lef:100, startY: 150, startX: 150, finallyY:150 },
                                              
        columnStyles: { 0: {
                cellPadding: 0.5
                }, 1: {
                cellWidth: 'center',
                cellPadding: 1
                }
                }
                })

  var columnasArea8 =  ["Bellas artes"]
  var dataArea8 =[
                          ["Artes plásticas y a fines"], ["Artes escénicas y a fines"], ["Cine y televisión"],
                          ["Publicidad y afines"], ["Música y afines"]
                        ]
                        
      doc.autoTable(columnasArea8, dataArea8,
                                                            
        { margin:{ top: 100, lef:100, startY: 150, startX: 150, finallyY:150 },
                                                            
        columnStyles: { 0: {
                  cellPadding: 0.5
                  }, 1: {
                  cellWidth: 'center',
                  cellPadding: 1
                  }
                  }
                  })
  doc.text("Fecha de la actividad:", 40, 640 )
  doc.text([resultados[0].createdAt], 150, 640)
  doc.text("Grado:", 40, 660 )
  doc.text([resultados[0].grado], 90, 660)
  doc.text("Número de pruebas presentadas:", 40, 680 )
  doc.text(String([resultados.length]), 200, 680)
  doc.text("Anexos: Tabla 1. Resultados pruebas múltiples.", 40, 720 )
  

    doc.html(ReactDOMServer.renderToString(<Test/>), {

// Tabla descripción inteligencias múltiples
    
      callback: function (doc) {
        
       var columnasInteligencias= ["INTELIGENCIA MÚLTIPLE","SE DESTACA EN","LE GUSTA","APRENDE MEJOR"]
       var dataInteligencias= [["AREA LINGUÍSTICO-VERBAL", "Lectura, escritura, narración de historias, memorización de fechas, piensa en palabras"
                  ,"Leer, escribir, contar cuentos, hablar, memorizar, hacer puzzles", 
                    "Leyendo, escuchando, viendo palabras, hablando, escribiendo, discutiendo y debatiendo"],
                  ["LÓGICO-MATEMÁTICA", "Matemáticas, razonamiento, lógica, resolución de problemas, pautas" ,
                   "Resolver problemas, cuestionarios, trabajar con números, experimientar", 
                   "Usando pautas y relaciones, clasificando, trabajando con obstáculos"],
                  ["ESPACIAL", "Lectura de mapas gráficos, dibujando, laberintos, puzzles, imaginando cosas, visualizando" ,
                    "Diseñar, dibujar, construir, crear, soñar despierto, mirar dibujos", 
                    "Trabajando con dibujos y colores, visualizando, usando su ojo mental, dibujando"],
                  ["CORPORAL-KINÉSICA", "Atletismo, danza, arte dramático, trabajos manuales, utilización de herramientas" ,
                    "Moverse, tocar y hablar, lenguaje corporal ", 
                    "Tocando, moviéndose, procesando información a través de sensaciones corporales "],
                  ["MUSICAL", "Cantar, reconocer sonidos, recordar melodías, ritmos" ,
                    "Cantar, tatarear, tocar un instrumento, escuchar música", 
                    "Rítmo, melodía, cantar, escuchando música y melodías."],
                  ["INTERPERSONAL", "Entendiendo a la gente, liderando, organizando, comunicando, resolviendo conflíctos, vendiendo" ,
                    "Tener amigos, hablar con la gente, juntarse con gente", 
                    "Compartiendo, comparando, relacionando, entrevistando, teniendo espacios, reflexionando"],
                  ["INTRAPERSONAL", "Entendiéndose a si mismo, reconociendo sus puntos fuertes y débiles, estableciendo objetivos  " ,
                    "Trabajar solo, reflexionar, seguir sus intereses", 
                    "Trabjando solo, haciendo proyectos a su propio ritmo, teniendo espacio, reflexionando"],
                  ["NATURALISTA", "Entendiendo la naturaleza, haciendo distinciones, identificando la flora y la fauna" ,
                    "Participar en la naturaleza, hacer distinciones", 
                    "Trabajar medio natural, explorar seres vivientes, aprender de plantas y temas de la naturaleza"],
              ]

        doc.autoTable(columnasInteligencias, dataInteligencias,

          { margin:{ top: 200 },
          styles: {
            fontSize: 10 ,overflow: 'linebreak',
            cellPadding: 1,
            cellWidth: 'center',
            cellPadding: 1
            }
          })

// Tablas áreas de conocimiento

var imgData = (
'data:image/png;base64,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 '
)
      console.log("Validar imagen", imgData )
      doc.addImage(imgData, 'JPEG', 255, 600, 100, 100);

      doc.save('ReporteColegio.pdf')
      }
 
        });
        doc.addPage();

        const headers = [["Documento", "Nombre Completo", "Código Único", 
          "Grado",	"Colegio"	,"Programa de interés",	"Programa de interés",	
          "Int Verbal",	"Int Matemática",	"Int visual espacial",	
          "Int naturalista",	"Int kinésico corporal",	"Int ­ríttmico musical",	
          "Int intrapersonal",	"Int interpersonal"
        ]];

        doc.setFontSize(8);
        doc.text("| Documento                        | Nombre completo          | Código | Grado    |  Colegio                 | Programa interes    | programa interes | V| M| V| N| K| R| IN| IE|   ",40,75)

        doc.autoTable({
          theme: "plain",
          //head:headers,
          columns: columns.map(col => ({ ...col, dataKey: col.field})),
          body: resultados,
          didParseCell: hookData => {
            console.log(hookData);

            if(hookData.row.index >= 0){
            console.log(resultados[hookData.row.index].programa_pre1);
          
            var programa = resultados[hookData.row.index].programa_pre1 
            var inteligencia = 1

              if(hookData.column.index == 7 )  {
                hookData.cell.styles.fillColor = getIntVerbal(programa,inteligencia);
              }
              if(hookData.column.index == 8 ) {
                hookData.cell.styles.fillColor = getIntMatematica(programa,inteligencia);
              }
              if(hookData.column.index == 9 ) {
                hookData.cell.styles.fillColor = getIntVisualEspacial(programa,inteligencia);
              }
              if(hookData.column.index == 10 ) {
                hookData.cell.styles.fillColor = getIntNaturalista(programa,inteligencia);
              }
              if(hookData.column.index == 11 ) {
                hookData.cell.styles.fillColor = getIntkinesico_corporal(programa,inteligencia);
              }
              if(hookData.column.index == 12 ) {
                hookData.cell.styles.fillColor = getIntRitmicoMusical(programa,inteligencia);
              }
              if(hookData.column.index == 13 ) {
                hookData.cell.styles.fillColor = getIntIntraPersonal(programa,inteligencia);
              }
              if(hookData.column.index == 14 ) {
                hookData.cell.styles.fillColor = getIntInterPersonal(programa,inteligencia);}
        }
      },
          styles: {
            fontSize: 8 ,overflow: 'linebreak',
            cellPadding: 1},
          columnStyles: {
            0: {
              cellWidth: 90,
              cellPadding: 0.5
            },
            1: {
              cellWidth: 'center',
              cellPadding: 0.5
            }
          },
          margin: {
            top:  80,
            bottom: 0
          },
      
        });

       }
      
      function MyExportButton() {
        return (
      <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <Button onClick={downloadPdf}>  
            Print Report  </Button> 
      </GridToolbarContainer>
     
        );
      }

//Cerrar sesión

    const Logout = async (e) => {

      axios
        .get("http://localhost:5000/users/logoutUser", {
          headers: {
            token: token,
          }})
    localStorage.removeItem("token");
    localStorage.clear();
     navigate('/')
    }

//Información del inicio de sesión
  
const token = localStorage.getItem("token");

useEffect(() => {
  if (token) {
    axios
      .get("http://localhost:5000/users/login", {
        headers: {
          token: token,
        },
       
      })
      .catch((error) => console.error(error));
     
  }

}, [token]);




    return(
        <div className='Usuario_body'>
            <div className='Home-body'>

            <div class="Home-header">
                <div>
                    <SideBar/>
                </div>
                <div class="uao-logo"></div>
                <div class="Home-titleFont">PORTAL DE MERCADEO</div> 

               <a class="Home_conf" onClick={Logout}><i class="fa fa-sign-out"></i></a>
               <a href="/Dashboard" class="Icon_home"></a>
               </div>

      <nav class="nav_bar">
      
      <a href="/ShowUsers" class="nav_tb">
          <div class="Icon_user"> </div>
          Usuarios</a>

      <a href="/ShowTests" class="nav_tb">
          <div class="Icon_col"></div>
          Test</a>

      <a href="/ShowProspect" class="nav_tb"> 
          <div class="Icon_pro"></div>
          Prospectos</a>

      <a href="/ShowEvaluaciones" class="nav_tb">
          <div class="Icon_pre"></div>
          Evaluaciones</a>
  
      <a href="/ShowResultados" class="nav_tb">
          <div class="Icon_test"></div>
          Resultados</a>
  
      <a href="/Dashboard" class="nav_tb">
          <div class="Icon_prosp"></div>
          Home</a>
               </nav> 
        <div class="Usuarios_dashboard">

            <div class="Test_icon_init"></div>  
            <div class="Usuarios_title_init">Resultados</div>

    
                    <DataGrid className='Tabla_position'
                      rows = {resultados}
                      disableSelectionOnClick
                      columns={columns}
                      pageSize={8}
                      responsive= {HorizontalSplit}
                      checkboxSelection
                      components={{
                        Toolbar: MyExportButton,
                  
                      }}
                      actions={[
                        {
                          icon: () => <PrintIcon />,// you can pass icon too
                          tooltip: "Export to Pdf",
                          onClick: () => downloadPdf(),
                          //isFreeAction: true
                        }
                      ]}
                      sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                    </DataGrid>
        
         
        </div>    
        </div>
        </div>
    );

}
