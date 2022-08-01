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


const URI = 'http://localhost:5000/prospects/'


export default function CompShowProspect  ()  {


  const [prospectos, setProspect] = useState([]);
  const navigate = useNavigate()
  
   
    useEffect( ()=>{
        getProspect()
    },[])

    //procedimiento para mostrar todos los Prospectos
    const getProspect = async () => {
        const res = await axios.get(URI,  {
      });
        setProspect(res.data)
    }

    //procedimiento para eliminar un usuario
   const deleteProspect = async (id) => {
    await axios.delete(`${URI}${id}`)
    getProspect()
    }

  //Configurar las columnas para Datatable

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    { field: "tipo_documento", headerName: "Tipo de documento", width: 200 },
    {
      field: "num_documento", headerName: "Documento",width: 120,
    },
    {
      field: "nombres", headerName: "Nombres", width: 160,
    },
    {
      field: "apellidos", headerName: "Apellidos", width: 160,
    },
    {
      field: "grado", headerName: "Grado", width: 160,
    },
    {
      field: "Ciudad_residencia", headerName: "Ciudad de residencia", width: 160,
    },
    {
      field: "email", headerName: "Email", width: 160,
    },
    {
      field: "telefono", headerName: "Teléfono", width: 160,
    },
    {
      field: "datos_auth", headerName: "Autorización de datos", width: 160,
    },
    {
      field: "createdAt", headerName: "Fecha de Creación", width: 160,
    },
    {
      field: "updatedAt", headerName: "Fecha de Modificación", width: 160,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editP/" + params.row.id} className='btn btn-light'>
            <i className="fas fa-edit"></i>
            </Link>
            <DeleteOutline 
              onClick={() => deleteProspect(params.row.id)}
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

            <div class="prospectos_icon_init"></div>  
            <div class="Usuarios_title_init">Prospectos</div>
            <Button href="/createP" className='Agregar_position'><i>Crear Prospecto</i></Button>
    
                    <DataGrid className='Tabla_position'
                      rows={prospectos}
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