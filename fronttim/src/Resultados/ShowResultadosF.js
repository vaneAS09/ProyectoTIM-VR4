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


const URI = 'http://localhost:5000/resultados/'


export default function CompShowResultadosF  ()  {


  const [resultados, setResultado] = useState([]);
  const navigate = useNavigate()
  const {id} = useParams()
  const {codigo_unico} = useParams()
  
   
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
    { field: "id", headerName: "ID", width: 90 },
    {field: "num_documento", headerName: "Documento",width: 120,},
    {field: "nombre_completo", headerName: "Nombre completo", width: 180,},
    {field: "codigo_test", headerName: "Código Único", width: 160,},
    {field: "grado", headerName: "Grado", width: 160,},
    {field: "colegio", headerName: "Colegio", width: 160,},
    {field: "programa_pre1", headerName: "Programa de interés", width: 160,},
    {field: "programa_pre2", headerName: "Programa de interés", width: 160,},
    {field: "puntos_verbal", headerName: "Puntos Verbal", width: 160,},
    {field: "puntos_matematica", headerName: "Puntos Matemática", width: 160,},
    {field: "puntos_visual_espacial", headerName: "Puntos visual espacial", width: 160,},
    {field: "puntos_naturalista", headerName: "Puntos naturalista", width: 160,},
    {field: "puntos_kinesico_corporal", headerName: "Puntos kinésico corporal", width: 160,},
    {field: "puntos_ritmico_musical", headerName: "Puntos rítmico musical", width: 160,},
    {field: "puntos_intrapersonal", headerName: "Puntos intrapersonal", width: 160,},
    {field: "puntos_interpersonal", headerName: "Puntos interpersonal", width: 160,},
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