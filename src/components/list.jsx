import react from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@mui/material/Button';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ListItem = ({ items, handleOpen,removeTodo,handleEditTodos }) => {
	return (
		<>
			{items.map((item, index) => {
				const { name, priority } = item;
				return (
					<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
						<TableCell component="th" scope="row">
							{name}
						</TableCell>
						<TableCell align="right">
							<Button
								style={{
									background: `${priority === 'Acil'
										? 'red'
										: priority === 'Önemli' ? 'orange' : 'blue'} `,
									color: 'white',
									padding: '10px',
									borderRadius: '20px'
								}}
							>
								{priority}
							</Button>
						</TableCell>
						<TableCell align="right">
							<IconButton onClick={handleEditTodos}>
								<EditIcon />
							</IconButton>
							<IconButton onClick={() => removeTodo(index)}>
								<DeleteIcon />
							</IconButton>
						</TableCell>
					</TableRow>
				);
			})}
		</>
	);
};

export default ListItem;
