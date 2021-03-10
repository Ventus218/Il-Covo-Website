import { DatePipe, formatDate } from "@angular/common"
import '@angular/common/locales/global/it'

export class Reservation {

    author: String
    startDate: Date
    endDate: Date
    details?: String

    constructor(author: String, startDate: Date, endDate: Date, details?: String) {
        this.author = author
        this.startDate = startDate
        this.endDate = endDate
        this.details = details
    }

    get startDateString(): String {

        let pipe = new DatePipe('it')
        
        return pipe.transform(this.startDate, 'mediumDate')! + ", " + pipe.transform(this.startDate, 'shortTime')
    }

    get endDateString() {
        let pipe = new DatePipe('it')

        return pipe.transform(this.endDate, 'mediumDate')! + ", " + pipe.transform(this.endDate, 'shortTime')
    }
}
