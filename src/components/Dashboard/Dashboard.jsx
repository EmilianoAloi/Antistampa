import { Typography } from "@mui/material"
import { uploadImg } from '../../services/config'

const Dashboard = () => {


    return (
        <>


            <Typography sx={{ color: 'white' }}>DASHBOARD</Typography>
            <input type="file" onChange={e => uploadImg(e.target.files[0])} />



        </>
    )
}

export default Dashboard