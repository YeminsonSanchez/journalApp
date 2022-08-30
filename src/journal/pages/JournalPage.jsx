import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayouts } from '../layouts/JournalLayouts';
import { NothingSelectedView } from '../views';

export const JournalPage = () => {
	return (
		<JournalLayouts>
			<NothingSelectedView />
			{/* <NoteView /> */}

			<IconButton
				size="large"
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { barckgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayouts>
	);
};
