import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayouth } from '../layout/AuthLayouth';

export const RegisterPage = () => {
	return (
		<AuthLayouth title="Register">
			<form>
				<Grid container>
					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}
					>
						<TextField
							label="Nombre completo"
							type="text"
							placeholder="Tu nombre"
							fullWidth="true"
						></TextField>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}
					>
						<TextField
							label="correo"
							type="email"
							placeholder="hola@gmail.com"
							fullWidth="true"
						></TextField>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}
					>
						<TextField
							label="contraseña"
							type="password"
							placeholder="contraseña"
							fullWidth="true"
						></TextField>
					</Grid>
					<Grid
						container
						spacing={2}
						sx={{ mb: 2, mt: 1 }}
					>
						<Grid
							item
							xs={12}
						>
							<Button
								variant="contained"
								fullWidth="true"
							>
								Crear cuenta
							</Button>
						</Grid>
						<Grid
							item
							xs={12}
						></Grid>
					</Grid>

					<Grid
						container
						direcction="row"
						justifyContent="end"
					>
						<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
						<Link
							component={RouterLink}
							color="inherit"
							to="/auth/login"
						>
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayouth>
	);
};
