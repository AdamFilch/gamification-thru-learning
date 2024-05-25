export enum SelectedPage {

    Home = "home",
    Learn = "learn",
    TalkToPot = "talktopot",
    ContactUs = "contactus",
    BecomeAPlayer = "becomeaplayer"

}

export type userInt = {
    username: string,
    password: string,
    firstname: string,
    gameProgress: Array<string>[],
    ongoingCourse: Array<string>[],
    role: string,
    _id: string,
   
}