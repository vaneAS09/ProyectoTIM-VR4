import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import '../CSS/Home.css';
import '../CSS/Listas_objetos.css';
import '../CSS/Navbar.css';
import { DeleteOutline, HorizontalSplit } from "@material-ui/icons";
import { DataGrid,GridToolbarExport,GridToolbarContainer,GridToolbarColumnsButton,GridToolbarFilterButton,
         GridToolbarDensitySelector} from "@material-ui/data-grid";
import SideBar from "../SideBar";
import {getIntVerbal,getIntMatematica,getIntVisualEspacial,getIntNaturalista,getIntRitmicoMusical,
         getIntkinesico_corporal,getIntIntraPersonal,getIntInterPersonal} from "./Programas.js";
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'


const URI = 'http://localhost:5000/resultados/'


export default function CompShowResultadosF  ()  {


  const [resultados, setResultado] = useState([]);
  const navigate = useNavigate()
  const {id} = useParams()
  const {codigo_unico} = useParams()
  //const verde =    getCellClassName()
  
   
    useEffect( ()=>{
        getResultado()
    },[])

    //procedimiento para mostrar todos los resultados
    const getResultado = async () => {
        const res = await axios.get(URI, {
            codigo_test:codigo_unico
      });
      console.log(codigo_unico)
        setResultado(res.data)
    }

    //procedimiento para eliminar un resultado
   const deleteResultado = async (id) => {
    await axios.delete(`${URI}${id}`)
    getResultado()
    }


  //Configurar las columnas para Datatable
  const columns = [
    {field: "id", headerName: "ID", width: 90 },
    {field: "num_documento", headerName: "Documento",width: 120,},
    {field: "nombre_completo", headerName: "Nombre completo", width: 180,},
    {field: "codigo_test", headerName: "Código Único", width: 200,},
    {field: "grado", headerName: "Grado", width: 160,},
    {field: "colegio", headerName: "Colegio", width: 160,},
    {field: "programa_pre1", headerName: "Programa de interés", width: 160,},
    {field: "programa_pre2", headerName: "Programa de interés", width: 160,},
    {field: "puntos_verbal", headerName: "Int Verbal", width: 160, 
    
    cellClassName: (params) => {
      return ( getIntVerbal(params.row.programa_pre1,params.row.puntos_verbal));
    },},
   
    {field: "puntos_matematica", headerName: "Puntos Matemática", width: 160,
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
    {field: "puntos_kinesico_corporal", headerName: "Puntos kinésico corporal", width: 160,
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
    {field: "createdAt", headerName: "Fecha de Creación", width: 160,},
    {field: "updatedAt", headerName: "Fecha de Modificación", width: 160,},
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
    const doc = new jsPDF()
    doc.text("Student Details", 20, 10)
    doc.autoTable({
      theme: "DataGrid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: resultados
    })
    doc.save('table.pdf')
  }
      
      function MyExportButton() {
        return (
      <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <PrintIcon />
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
                      rows={resultados}
                      disableSelectionOnClick
                      columns={columns}
                      pageSize={8}
                      responsive= {HorizontalSplit}
                      checkboxSelection
                      components={{
                        Toolbar: MyExportButton
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
