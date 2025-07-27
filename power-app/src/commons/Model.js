export const MODEL = {
    COMMON:{
        BUTTON:{
            SAVE: 'Save',
            CANCEL: 'Cancel',
            ADD: 'Add',
            DELETE: 'Delete',
            EDIT: 'Edit',
            UPLOAD: 'Upload file',
        }
    },
    HOMEPAGE: {
        WORKOUT_BUTTON: 'Workout',
        DIET_BUTTON: 'Diet',
        DESCRIPTION: 'Select an option to manage your workouts or meal plans',
    },
    WORKOUT: {
        NEW_WORKOUT:{
            ADD_BUTTON: 'Add Workout',
            UPLOAD_WORKOUT: 'Upload Workout',
        },
        DESCRIPTION: 'Workout plans',
    },
};

export function getModel() {
    return MODEL;
}