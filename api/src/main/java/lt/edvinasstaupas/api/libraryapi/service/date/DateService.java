package lt.edvinasstaupas.api.libraryapi.service.date;

import java.util.Date;

public class DateService {
    public static Date getDateWithAddition(Long timeInMillis) {
        return new Date((new Date()).getTime() + timeInMillis);
    }

    public static Date getDateWithDeduction(Long timeInMillis) {
        return new Date((new Date()).getTime() - timeInMillis);
    }
}
