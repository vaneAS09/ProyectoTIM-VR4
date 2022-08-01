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


const URI = 'http://localhost:5000/test/'


export default function CompShowTest  ()  {


  const [tests, setTest] = useState([]);
  const navigate = useNavigate()
  
   
    useEffect( ()=>{
        getTest()
    },[])

    //procedimiento para mostrar todos los tests
    const getTest = async () => {
        const res = await axios.get(URI,  {
      });
        setTest(res.data)
    }

    //procedimiento para eliminar un test
   const deleteTest = async (id) => {
    await axios.delete(`${URI}${id}`)
    getTest()
    }

  //Configurar las columnas para Datatable

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    { field: "codigo_unico", headerName: "Codigo Único", width: 200 },
    {
      field: "colegio", headerName: "Colegio",width: 350,
    },
    {
      field: "estado", headerName: "Estado", width: 160,
    },
    {
      field: "createdAt", headerName: "Fecha de Creación", width: 250,
    },
    {
      field: "updatedAt", headerName: "Fecha de Modificación", width: 250,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            
            <Link to={"/editT/" + params.row.id} className='btn btn-light'>
            <i className="fas fa-edit"></i>
            </Link>
            <DeleteOutline 
              onClick={() => deleteTest(params.row.id)}
            />
            <Link to={"/ShowResultadosF/" + params.row.codigo_unico} className='btn btn-light'>
            Ver +
            </Link>
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

            <div class="Test_icon_init"></div>  
            <div class="Usuarios_title_init">Relación de Tests</div>
            <Button href="/createT" className='Agregar_position'><i>Crear Test</i></Button>
    
                    <DataGrid className='Tabla_position'
                      rows={tests}
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