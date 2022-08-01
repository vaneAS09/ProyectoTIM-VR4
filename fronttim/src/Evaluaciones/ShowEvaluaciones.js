import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import '../CSS/Home.css';
import '../CSS/Listas_objetos.css';
import '../CSS/Navbar.css';
import { Button } from '@mui/material';
import { DeleteOutline, HorizontalSplit } from "@material-ui/icons";
import { DataGrid,GridToolbarExport,GridToolbarContainer,GridToolbarColumnsButton,GridToolbarFilterButton,
  GridToolbarDensitySelector} from "@material-ui/data-grid";
import SideBar from "../SideBar";


const URI = 'http://localhost:5000/evaluaciones/'


export default function CompShowEvaluaciones  ()  {


  const [evaluaciones, setEvaluacion] = useState([]);
  const navigate = useNavigate()
  
   
    useEffect( ()=>{
        getEvaluacion()
    },[])

    //procedimiento para mostrar todas las evaluaciones
    const getEvaluacion = async () => {
        const res = await axios.get(URI,  {
      });
        setEvaluacion(res.data)
    }

    //procedimiento para eliminar una evaluación
   const deleteEvaluacion = async (id) => {
    await axios.delete(`${URI}${id}`)
    getEvaluacion()
    }

  //Configurar las columnas para Datatable

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {field: "documento", headerName: "Documento",width: 120,},
    {field: "nombres", headerName: "Nombres", width: 180,},
    {field: "apellidos", headerName: "Apellidos", width: 160,},
    {field: "ciudad", headerName: "Ciudad de residencia", width: 160,},
    {field: "grado", headerName: "Grado", width: 160,},
    {field: "email", headerName: "Email", width: 160,},
    {field: "programa1", headerName: "Programa de interés", width: 160,},
    {field: "programa2", headerName: "Programa de interés", width: 160,},
    {field: "codigo_unico", headerName: "Código Único", width: 160,},
    {field: "colegio", headerName: "Colegio", width: 160,},
    {field: "pregunta1", headerName: "Pregunta 1", width: 160,},
    {field: "pregunta2", headerName: "Pregunta 2", width: 160,},
    {field: "pregunta3", headerName: "Pregunta 3", width: 160,},
    {field: "pregunta4", headerName: "Pregunta 4", width: 160,},
    {field: "pregunta5", headerName: "Pregunta 5", width: 160,},
    {field: "pregunta6", headerName: "Pregunta 6", width: 160,},
    {field: "pregunta7", headerName: "Pregunta 7", width: 160,},
    {field: "pregunta8", headerName: "Pregunta 8", width: 160,},
    {field: "pregunta9", headerName: "Pregunta 9", width: 160,},
    {field: "pregunta10", headerName: "Pregunta 10", width: 160,},
    {field: "pregunta11", headerName: "Pregunta 11", width: 160,},
    {field: "pregunta12", headerName: "Pregunta 12", width: 160,},
    {field: "pregunta13", headerName: "Pregunta 13", width: 160,},
    {field: "pregunta14", headerName: "Pregunta 14", width: 160,},
    {field: "pregunta15", headerName: "Pregunta 15", width: 160,},
    {field: "pregunta16", headerName: "Pregunta 16", width: 160,},
    {field: "pregunta17", headerName: "Pregunta 17", width: 160,},
    {field: "pregunta18", headerName: "Pregunta 18", width: 160,},
    {field: "pregunta19", headerName: "Pregunta 19", width: 160,},
    {field: "pregunta20", headerName: "Pregunta 20", width: 160,},
    {field: "pregunta21", headerName: "Pregunta 21", width: 160,},
    {field: "pregunta22", headerName: "Pregunta 22", width: 160,},
    {field: "pregunta23", headerName: "Pregunta 23", width: 160,},
    {field: "pregunta24", headerName: "Pregunta 24", width: 160,},
    {field: "pregunta25", headerName: "Pregunta 25", width: 160,},
    {field: "pregunta26", headerName: "Pregunta 26", width: 160,},
    {field: "pregunta27", headerName: "Pregunta 27", width: 160,},
    {field: "pregunta28", headerName: "Pregunta 28", width: 160,},
    {field: "pregunta29", headerName: "Pregunta 29", width: 160,},
    {field: "pregunta30", headerName: "Pregunta 30", width: 160,},
    {field: "pregunta31", headerName: "Pregunta 31", width: 160,},
    {field: "pregunta32", headerName: "Pregunta 32", width: 160,},
    {field: "pregunta33", headerName: "Pregunta 33", width: 160,},
    {field: "pregunta34", headerName: "Pregunta 34", width: 160,},
    {field: "pregunta35", headerName: "Pregunta 35", width: 160,},
    {field: "pregunta36", headerName: "Pregunta 36", width: 160,},
    {field: "pregunta37", headerName: "Pregunta 37", width: 160,},
    {field: "pregunta38", headerName: "Pregunta 38", width: 160,},
    {field: "pregunta39", headerName: "Pregunta 39", width: 160,},
    {field: "pregunta40", headerName: "Pregunta 40", width: 160,},

    {field: "createdAt", headerName: "Fecha de Creación", width: 160,},
    {field: "updatedAt", headerName: "Fecha de Modificación", width: 160,},
    {
      field: "action",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editE/" + params.row.id} className='btn btn-light'>
            <i className="fas fa-edit"></i>
            </Link>
            <DeleteOutline 
              onClick={() => deleteEvaluacion(params.row.id)}
            />
          </>
        );
      },
    },
  ];
      
      function MyExportButton() {
        return (
      <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
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

            <div class="pregunta_icon_init"></div>  
            <div class="Usuarios_title_init">Evaluaciones</div>
    
                    <DataGrid className='Tabla_position'
                      rows={evaluaciones}
                      disableSelectionOnClick
                      columns={columns}
                      pageSize={8}
                      responsive= {HorizontalSplit}
                      checkboxSelection
                      components={{
                        Toolbar: MyExportButton
                      }}

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