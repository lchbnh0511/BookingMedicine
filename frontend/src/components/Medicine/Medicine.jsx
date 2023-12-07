import * as React from 'react';
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GiMedicines } from "react-icons/gi";
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Checkbox, FormControlLabel, MenuItem, InputLabel, FormControl, Select } from '@material-ui/core'
// import SelectBox from '../Narbar/Menu/SelectBox'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const options2 = [
    { value: 'Ngày 1 lần', label: 'Ngày 1 lần' },
    { value: 'Ngày 2 lần', label: 'Ngày 2 lần' },
    { value: 'Ngày 3 lần', label: 'Ngày 3 lần' },
]

export default function SubCheckOut() {
    const classes = useStyles();
    const history = useHistory();
    const [FullName, setFullName] = useState('');
    const [phone, setPhoneNumber] = useState('');
    const [warning, setWarning] = useState('');
    const [address, setAddress] = useState('');
    const [weight, setWeight] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [BHYT, setBHYT] = useState('');
    const [CCCD, setCCCD] = useState('');
    const [code, setCode] = useState('');

    const [lists, setList] = useState([])
    const [options1, setOptions1] = useState([]);
    async function getData() {
        try {
            let res = await axios.get('http://localhost:8081/api/getAllMedicine');
            setOptions1(res.data.medicine);
        } catch (error) {
            setOptions1([])
        }
    }
    useEffect(() => {
        getData();
    }, []);
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function AddList({ setList }) {
        const nameRef = useRef()
        const doseRef = useRef()
        const countRef = useRef()
        const noteRef = useRef()

        function handleSubmit(event) {
            event.preventDefault()
            const name = nameRef.current.value;
            const dose = doseRef.current.value;
            const count = countRef.current.value;
            const note = noteRef.current.value;
            const newList = {
                id: uuidv4(),
                name,
                dose,
                count,
                note
            }
            setList((prevList) => {
                return prevList.concat(newList)
            })
            nameRef.current.value = ""
            doseRef.current.value = ""
            countRef.current.value = ""
            noteRef.current.value = ""
        }

        return (
            <form className="addForm" onSubmit={handleSubmit}>
                <select ref={nameRef} style={{ width: '200px', height: '40px' }}>
                    {options1.map((option) => (
                        <option key={option.nameMedicine} value={option.nameMedicine}>
                            {option.nameMedicine}
                        </option>
                    ))}
                </select>
                <select ref={doseRef} style={{ width: '200px', height: '40px' }}>

                    {options2.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <input type="text" name="count" placeholder="Nhập số lượng" ref={countRef} style={{ width: '200px', height: '40px' }} />
                <input type="text" name="note" placeholder="Ghi chú" ref={noteRef} style={{ width: '200px', height: '40px' }} />
                <button type="submit" style={{ width: '100px', height: '40px' }}>Thêm</button>
            </form>
        )
    }

    const [diseases, setDiseases] = useState('');

    const [cookies] = useCookies([]);
    const handleOrder = async () => {
        if (!(FullName && phone && address && weight && birth && CCCD && diseases))
            setWarning("Vui lòng nhập đủ thông tin")
        else {
            
                let data = {
                    userID: cookies.id,
                    customerName: FullName,
                    birthday: birth,
                    customerWeight: weight,
                    customerGender:gender,
                    customerBHYT :  BHYT === '' ? null : BHYT,
                    customerCCCD:CCCD,
                    customerCode :  code === '' ? null : code,
                    customerPhoneNumber:phone,
                    customerAddress:address,
                    customerProb:diseases,
                    lists:lists,
                };
                await axios.post("http://localhost:8081/api/handleSubmit", data)
                history.push("/historyOrder")
            

        }
    }
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    width: '1000px',
                    height: '1000px',
                    marginLeft: '-270px',
                }}
            >
                <Box
                    sx={{
                        marginTop: 120,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        style={{ color: 'white', backgroundColor: '#0099FF' }}
                        sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AiOutlineMedicineBox />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Kê Đơn Thuốc
                    </Typography>
                    <Box noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2} style={{ marginTop: '20px' }}>
                            <Grid item xs={16} sm={3}>
                                <TextField
                                    autoComplete="given-name"
                                    name="FullName"
                                    required
                                    fullWidth
                                    id="FullName"
                                    label="Họ và Tên Bệnh nhân"
                                    autoFocus
                                    value={FullName}
                                    onChange={e => setFullName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={16} sm={3}>
                                <TextField
                                    required
                                    id="birth"
                                    label="Ngày Sinh"
                                    type="date"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={birth}
                                    onChange={e => setBirth(e.target.value)}
                                />

                            </Grid>
                            <Grid item xs={16} sm={3}>
                                <TextField
                                    required
                                    fullWidth
                                    id="weight"
                                    label="Cân Nặng"
                                    name="weight"
                                    autoComplete="weight"
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={16} sm={3} style={{ marginTop: '-7px' }}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        labelId="gender"
                                        id="gender"
                                        value={gender}
                                        onChange={e => setGender(e.target.value)}
                                    >
                                        <MenuItem value={0}>Male</MenuItem>
                                        <MenuItem value={1}>Female</MenuItem>
                                        <MenuItem value={2}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{ marginTop: '20px' }}>
                            <Grid item xs={16} sm={3}>
                                <TextField
                                    name="BHYT"
                                    fullWidth
                                    id="BHYT"
                                    label="Mã số BHYT (Nếu có)"
                                    autoFocus
                                    value={BHYT}
                                    onChange={e => setBHYT(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={16} sm={3}>
                                <TextField
                                    required
                                    name="CCCD"
                                    fullWidth
                                    id="CCCD"
                                    label="CCCD/CMND"
                                    autoFocus
                                    value={CCCD}
                                    onChange={e => setCCCD(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={16} sm={3}>
                                <TextField
                                    fullWidth
                                    id="code"
                                    label="Mã định danh y tế (Nếu có)"
                                    name="code"
                                    autoComplete="code"
                                    value={code}
                                    onChange={e => setCode(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={16} sm={3}  >
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                    value={phone}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{ marginTop: '20px' }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="address"
                                    required
                                    fullWidth
                                    id="address"
                                    label="Địa Chỉ"
                                    autoFocus
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="diseases"
                                    required
                                    fullWidth
                                    id="diseases"
                                    label="Chẩn đoán"
                                    autoFocus
                                    value={diseases}
                                    onChange={e => setDiseases(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Avatar
                            style={{
                                color: 'white',
                                backgroundColor: '#0099FF',
                                position: 'relative',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                marginTop: '20px'
                            }}
                            sx={{ m: 1, bgcolor: 'secondary.main' }}
                        >
                            <GiMedicines />
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{ textAlign: 'center', marginTop: '20px' }}>
                            Thông tin đơn thuốc
                        </Typography>
                        <Grid item xs={12} style={{ marginTop: '-150px' }}>
                            <div className="crud">
                                <div style={{ marginTop: '200px' }}>
                                    <AddList setList={setList} />
                                    <form>
                                        <table>
                                            {
                                                lists.map((current) => (
                                                    <tr>
                                                        <td>{current.name}</td>
                                                        <td>{current.dose}</td>
                                                        <td>{current.count}</td>
                                                        <td>{current.note}</td>
                                                        <td>
                                                            <button className="delete" type='button' onClick={() => handleDelete(current.id)} >Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </table>
                                    </form>
                                </div>
                            </div>

                        </Grid>

                        <Grid
                            style={{ marginTop: '20px' }}
                            item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Xác nhận "
                            />
                        </Grid>
                        <div style={{ color: 'red' }}>{warning}</div>
                        <Button
                            style={{ marginTop: '50px', color: 'white', backgroundColor: '#0099FF' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleOrder}>
                            Xác nhận
                        </Button>
                    </Box>
                </Box>
                <Copyright
                    style={{ marginTop: '40px' }}
                    sx={{ mt: 5 }} />
            </Box>
        </Container>
    );
}