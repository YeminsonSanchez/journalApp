import { JournalLayouts } from '../layouts/JournalLayouts';
import { NothingSelectedView, NoteView } from '../views';

export const JournalPage = () => {
	return (
		<JournalLayouts>
			{/* <NothingSelectedView /> */}
			<NoteView />
		</JournalLayouts>
	);
};
