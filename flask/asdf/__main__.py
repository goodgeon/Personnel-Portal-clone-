#!/usr/bin/env python3
import os
import datetime, json
from flask import render_template, request, Flask, abort, make_response,jsonify, send_from_directory, redirect, url_for
from flask_cors import CORS
import psycopg2

app = Flask(__name__) #Flask 인스턴스 생성/초기화
app.config['JSON_AS_ASCII'] = False          # 日本語文字列が文字化けしないようにするおまじない
CORS(app) #Allow CORS

conn = psycopg2.connect("dbname='personnel record' user='postgres' host='localhost' password='1111'")
cur = conn.cursor()


@app.route("/", methods = ["GET", "POST"])
def home():
    return json.dumps({"hello":"ワールド"},ensure_ascii=False)

# DB insert
@app.route("/regist", methods = ["GET", "POST"])
def regist():
    obj = request.json["obj"]

    #employeeNo 중복확인
    employeeNo = obj["employeeNo"]
    cur.execute("select employee_no \
                 from employee \
                 where employee_no = '%s'"\
                 %employeeNo)
    tmp = cur.fetchall()

    if not tmp :
        print("size 0")
        cur.execute("insert into passport                     \
                        (passport_no,                         \
                         passport_expiration_date,            \
                         passport_country)                    \
                        VALUES (                              \
                        '%s','%s','%s'                        \
                        )"                                    \
                        %(  obj["passportNo"]              ,  \
                            obj["passportExpirationDate"]  ,  \
                            obj["passportCountry"]         ,  \
                        )
                    )
        cur.execute("insert into residence                      \
                        (residence_no,                          \
                         residence_delivery_date,               \
                         residence_category,                    \
                         residence_period,                      \
                         residence_expiration_date              \
                         )                                      \
                        VALUES (                                \
                        '%s','%s','%s','%s','%s'                \
                        )"                                      \
                        %(  obj["residenceNo"]              ,   \
                            obj["residenceDeliveryDate"]    ,   \
                            obj["residenceCategory"]        ,   \
                            obj["residencePeriod"]          ,   \
                            obj["residenceExpirationDate"]      \
                        )
                    )
        cur.execute("insert into account                     \
                        (account_no,                         \
                         bank_name,                          \
                         branch_name,                        \
                         account_type,                       \
                         account_name                        \
                         )                                   \
                        VALUES (                             \
                        '%s','%s','%s','%s','%s'             \
                        )"                                   \
                        %(  obj["accountNo"]        ,        \
                            obj["bankName"]         ,        \
                            obj["branchName"]       ,        \
                            obj["accountType"]      ,        \
                            obj["accountName"]               \
                        )
                    )
        cur.execute("insert into employee               \
                        (employee_no, last_name_kanji, first_name_kanji, last_name_hurigana, first_name_hurigana, last_name_english, first_name_english,  \
                        birthdate, gender, mynumber, mail_company, mail_private, join_date, department_id, passport_no, residence_no, account_no)  \
                        VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')"\
                        %(  obj["employeeNo"]       ,       \
                            obj["lastNameKanji"]    ,       \
                            obj["firstNameKanji"]   ,       \
                            obj["lastNameHurigana"] ,       \
                            obj["firstNameHurigana"],       \
                            obj["lastNameEnglish"]  ,       \
                            obj["firstNameEnglish"] ,       \
                            obj["birthdate"]        ,       \
                            obj["gender"]           ,       \
                            obj["mynumber"]         ,       \
                            obj["mailCompany"]      ,       \
                            obj["mailPrivate"]      ,       \
                            obj["joinDate"]         ,       \
                            obj["departmentId"]     ,       \
                            obj["passportNo"]      ,       \
                            obj["residenceNo"]     ,       \
                            obj["accountNo"]               \
                        )
                    )
        cur.execute("insert into contact \
                        (employee_no, cellphone_no, post_no, address, phone_no, address_mother_country, post_no_mother_country, \
                        cellphone_no_mother_country, phone_no_mother_country, cellphone_no_emergency, name_emergency, relation_emergency) \
                        VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')"\
                        %(  obj["employeeNo"]               ,   \
                            obj["cellphoneNo"]              ,   \
                            obj["postNo"]                   ,   \
                            obj["address"]                  ,   \
                            obj["phoneNo"]                  ,   \
                            obj["addressMotherCountry"]     ,   \
                            obj["postNoMotherCountry"]      ,   \
                            obj["cellphoneNoMotherCountry"] ,   \
                            obj["phoneNoMotherCountry"]     ,   \
                            obj["cellphoneNoEmergency"]     ,   \
                            obj["nameEmergency"]            ,   \
                            obj["relationEmergency"]            \
                        )
                    )
        cur.execute("insert into academic_career        \
                        (employee_no,                   \
                        graduation_date,                \
                        school,                         \
                        major)                          \
                        VALUES (                        \
                        '%s', '%s', '%s', '%s')"        \
                        %(  obj["employeeNo"]      ,    \
                            obj["graduationDate"]  ,    \
                            obj["school"]          ,    \
                            obj["major"]                \
                        )                               \
                    )
        cur.execute("insert into education_institute        \
                        (employee_no,                       \
                        education_start_date,               \
                        institution_name,                   \
                        course_name)                        \
                        VALUES ('%s','%s','%s','%s')"       \
                        %(  obj["employeeNo"]           ,   \
                            obj["educationStartDate"]   ,   \
                            obj["institutionName"]      ,   \
                            obj["courseName"]               \
                        )
                    )
        cur.execute("insert into career                      \
                        (employee_no,                        \
                        career_join_date,                    \
                        career_exit_date,                    \
                        company_name,                        \
                        position,                            \
                        task,                                \
                        is_abroad)                           \
                        VALUES (                             \
                        '%s','%s','%s','%s','%s','%s','%s'   \
                        )"                                   \
                        %(  obj["employeeNo"]       ,        \
                            obj["careerJoinDate"]   ,        \
                            obj["careerExitDate"]   ,        \
                            obj["companyName"]      ,        \
                            obj["position"]         ,        \
                            obj["task"]             ,        \
                            obj["isAbroad"]                  \
                        )
                    )
        
        conn.commit()
        return json.dumps({"isSuccess":True},ensure_ascii=False)
    else : 
        print(len(tmp))
        return json.dumps({"isSuccess":False},ensure_ascii=False)


# DB update
@app.route("/udpate", methods = ["GET", "POST"])
def udpate():
    obj = request.json["obj"]
    try : 
        cur.execute("UPDATE passport        \
                    SET     passport_no                = '%s'   ,          \
                            passport_expiration_date   = '%s'   ,          \
                            passport_country           = '%s'              \
                    where   passport_no                = '%s'              \
                            "                                          \
                            %(  obj["passportNo"]                   ,  \
                                obj["passportExpirationDate"]       ,  \
                                obj["passportCountry"]              ,  \
                                obj["beforePassportNo"]             ,  \
                            )                                       \
                    )
        cur.execute("UPDATE residence        \
                    SET     residence_no                 = '%s'    ,           \
                            residence_delivery_date      = '%s'    ,           \
                            residence_category           = '%s'    ,           \
                            residence_period             = '%s'    ,           \
                            residence_expiration_date    = '%s'                \
                    where   residence_no                  = '%s'                \
                            "                                         \
                            %(  obj["residenceNo"]                 ,  \
                                obj["residenceDeliveryDate"]       ,  \
                                obj["residenceCategory"]           ,  \
                                obj["residencePeriod"]             ,  \
                                obj["residenceExpirationDate"]     ,  \
                                obj["beforeResidenceNo"]           ,  \
                            )                                         \
                    )
        cur.execute("UPDATE account        \
                    SET     account_no             = '%s'   ,          \
                            bank_name              = '%s'   ,          \
                            branch_name            = '%s'   ,          \
                            account_type           = '%s'   ,          \
                            account_name           = '%s'              \
                    where   account_no             = '%s'              \
                            "                                          \
                            %(  obj["accountNo"]               ,  \
                                obj["bankName"]                ,  \
                                obj["branchName"]              ,  \
                                obj["accountType"]             ,  \
                                obj["accountName"]             ,  \
                                obj["beforeAccountNo"]         ,  \
                            )                                     \
                    )

        cur.execute("UPDATE employee                            \
                    SET    last_name_kanji     = '%s'    ,      \
                            first_name_kanji    = '%s'   ,      \
                            last_name_hurigana  = '%s'   ,      \
                            first_name_hurigana = '%s'   ,      \
                            last_name_english   = '%s'   ,      \
                            first_name_english  = '%s'   ,      \
                            birthdate           = '%s'   ,      \
                            gender              = '%s'   ,      \
                            mynumber            = '%s'   ,      \
                            mail_company        = '%s'   ,      \
                            mail_private        = '%s'   ,      \
                            join_date           = '%s'   ,      \
                            passport_no         = '%s'   ,      \
                            residence_no        = '%s'   ,      \
                            account_no          = '%s'   ,      \
                            department_id       = '%s'          \
                            where employee_no = '%s'            \
                            "                                   \
                            %(
                                obj["lastNameKanji"]    ,       \
                                obj["firstNameKanji"]   ,       \
                                obj["lastNameHurigana"] ,       \
                                obj["firstNameHurigana"],       \
                                obj["lastNameEnglish"]  ,       \
                                obj["firstNameEnglish"] ,       \
                                obj["birthdate"]        ,       \
                                obj["gender"]           ,       \
                                obj["mynumber"]         ,       \
                                obj["mailCompany"]      ,       \
                                obj["mailPrivate"]      ,       \
                                obj["joinDate"]         ,       \
                                obj["passportNo"]       ,       \
                                obj["residenceNo"]      ,       \
                                obj["accountNo"]        ,       \
                                obj["departmentId"]    ,       \
                                obj["employeeNo"]               \
                            ))                                  
        cur.execute("UPDATE contact                                                             \
                    SET                                                                        \
                            cellphone_no                    = '%s'      ,   \
                            post_no                         = '%s'      ,   \
                            address                         = '%s'      ,   \
                            phone_no                        = '%s'      ,   \
                            address_mother_country          = '%s'      ,   \
                            post_no_mother_country          = '%s'      ,   \
                            cellphone_no_mother_country     = '%s'      ,   \
                            phone_no_mother_country         = '%s'      ,   \
                            cellphone_no_emergency          = '%s'      ,   \
                            name_emergency                  = '%s'      ,   \
                            relation_emergency              = '%s'          \
                    WHERE   employee_no                     = '%s'"         \
                            %(  obj["cellphoneNo"]              ,   \
                                obj["postNo"]                   ,   \
                                obj["address"]                  ,   \
                                obj["phoneNo"]                  ,   \
                                obj["addressMotherCountry"]     ,   \
                                obj["postNoMotherCountry"]      ,   \
                                obj["cellphoneNoMotherCountry"] ,   \
                                obj["phoneNoMotherCountry"]     ,   \
                                obj["cellphoneNoEmergency"]     ,   \
                                obj["nameEmergency"]            ,   \
                                obj["relationEmergency"]        ,   \
                                obj["employeeNo"]                   \
                            )
                        )
        cur.execute("Update academic_career                 \
                    SET                                    \
                            graduation_date = '%s'     ,    \
                            school = '%s'              ,    \
                            major = '%s'                    \
                    WHERE   employee_no = '%s'"             \
                            %(                              \
                                obj["graduationDate"]  ,    \
                                obj["school"]          ,    \
                                obj["major"]           ,    \
                                obj["employeeNo"]      ,    \
                            )                               \
                        )
        cur.execute("Update education_institute                 \
                    SET                                         \
                            education_start_date        = '%s'     ,   \
                            institution_name            = '%s'     ,   \
                            course_name                 = '%s'         \
                    WHERE   employee_no                 = '%s'"        \
                            %(                                  \
                                obj["educationStartDate"]   ,   \
                                obj["institutionName"]      ,   \
                                obj["courseName"]           ,   \
                                obj["employeeNo"]               \
                            )
                    )
        cur.execute("Update career                               \
                    SET                                          \
                            career_join_date = '%s'     ,        \
                            career_exit_date = '%s'     ,        \
                            company_name     = '%s'     ,        \
                            position         = '%s'     ,        \
                            task             = '%s'     ,        \
                            is_abroad        = '%s'              \
                    Where   employee_no      = '%s'     "        \
                            %(  
                                obj["careerJoinDate"]   ,        \
                                obj["careerExitDate"]   ,        \
                                obj["companyName"]      ,        \
                                obj["position"]         ,        \
                                obj["task"]             ,        \
                                obj["isAbroad"]         ,        \
                                obj["employeeNo"]                \
                            )
                        )
    except : 
        return json.dumps({"isSuccess":False},ensure_ascii=False)    
        
    conn.commit()
    return json.dumps({"isSuccess":True},ensure_ascii=False)
                        


    

@app.route("/getList", methods = ["GET", "POST"])
def getList():

    cur.execute("select employee.employee_no         ,   \
                        last_name_kanji     ,   \
                        first_name_kanji    ,   \
                        last_name_hurigana  ,   \
                        first_name_hurigana ,   \
                        last_name_english   ,   \
                        first_name_english  ,   \
                        birthdate           ,   \
                        gender              ,   \
                        mynumber            ,   \
                        mail_company        ,   \
                        mail_private        ,   \
                        join_date           ,   \
                        passport_no         ,   \
                        residence_no        ,   \
                        account_no          ,   \
                        employee.department_id       ,   \
                        department_category ,   \
                        department_name     ,   \
                        unit                ,   \
                        cellphone_no            \
                 from   employee,contact,department \
                 where  employee.employee_no = contact.employee_no  \
                        and employee.department_id = department.department_id  \
                 ")

    def dateToString(value) : 
        if isinstance(value, datetime.date): 
            return value.strftime('%Y-%m-%d')


    # Key값 부여
    empList = [dict(employeeNo          = row[0]    ,   \
                    lastNameKanji       = row[1]    ,   \
                    firstNameKanji      = row[2]    ,   \
                    lastNameHurigana    = row[3]    ,   \
                    firstNameHurigana   = row[4]    ,   \
                    lastNameEnglish     = row[5]    ,   \
                    firstNameEnglish    = row[6]    ,   \
                    birthdate           = row[7]    ,   \
                    gender              = row[8]    ,   \
                    mynumber            = row[9]    ,   \
                    mailCompany         = row[10]   ,   \
                    mailPrivate         = row[11]   ,   \
                    joinDate            = row[12]   ,   \
                    passportNo          = row[13]   ,   \
                    residenceNo         = row[14]   ,   \
                    accountNo           = row[15]   ,   \
                    departmentId        = row[16]   ,   \
                    departmentCategory  = row[17]   ,   \
                    departmentName      = row[18]   ,   \
                    unit                = row[19]   ,   \
                    cellphoneNo         = row[20]   ,   \
                    ) for row in cur.fetchall()         \
              ]

    return json.dumps(empList, default = dateToString) 

@app.route("/getDepartmentCategoryList", methods = ["GET", "POST"])
def getDepartmentCategoryList() : 
    cur.execute("select department_category \
                from department_category")

    # departmentList = [dict(departmentId = row[0]    ,   \
    #                        departmentCategory = row[1] , \
    #                        departmentName = row[2]  ,   \
    #                        unit = row[3]                \
    #                        ) for row in cur.fetchall()
    #                  ]
    
    departmentCategoryList = [dict(departmentCategory = row[0]    ,   \
                           ) for row in cur.fetchall()
                     ]

    print(departmentCategoryList)
    return json.dumps(departmentCategoryList)

@app.route("/getDepartmentNameList", methods = ["GET", "POST"])
def getDepartmentNameList() :
    departmentCategory = request.json["obj"]
    cur.execute("SELECT department_name\
                FROM department_name\
                WHERE department_name.department_category = '%s'"%departmentCategory)
    departmentNameList = [dict(departmentName = row[0]) for row in cur.fetchall()]
    return json.dumps(departmentNameList)

@app.route("/getUnitList", methods = ["GET", "POST"])
def getUnitList() :
    departmentName = request.json["obj"]
    cur.execute("SELECT unit\
                FROM unit, department_name\
                WHERE unit.department_name = department_name.department_name\
                AND unit.department_name = '%s'"%departmentName)
    
    unitList = [dict(unit = row[0]) for row in cur.fetchall()]
    return json.dumps(unitList)


@app.route("/getEmployee", methods = ["GET", "POST"])
def getEmployee():
    employeeNo = request.json["obj"]
    print(employeeNo)
    cur.execute("select employee.employee_no , \
                        department_category ,   \
                        department_name ,   \
                        unit    ,   \
                        last_name_kanji ,   \
                        first_name_kanji    ,   \
                        last_name_hurigana  ,   \
                        first_name_hurigana ,   \
                        last_name_english   ,   \
                        first_name_english  ,   \
                        birthdate   ,   \
                        gender  ,   \
                        mynumber    ,   \
                        mail_company    ,   \
                        mail_private    ,   \
                        join_date   ,   \
                        post_no    ,   \
                        address ,   \
                        cellphone_no    ,   \
                        phone_no    ,   \
                        post_no_mother_country  ,   \
                        address_mother_country  ,   \
                        cellphone_no_mother_country ,   \
                        phone_no_mother_country ,   \
                        name_emergency  ,   \
                        relation_emergency  ,   \
                        cellphone_no_emergency,  \
                        graduation_date,    \
                        school,     \
                        major,   \
                        education_start_date    ,   \
                        institution_name    ,   \
                        course_name ,   \
                        career_join_date    ,   \
                        career_exit_date    ,   \
                        company_name    ,   \
                        position    ,   \
                        task    ,   \
                        is_abroad   ,   \
                        employee.passport_no    ,   \
                        passport_expiration_date   ,   \
                        passport_country    ,   \
                        employee.residence_no   ,   \
                        residence_delivery_date ,   \
                        residence_category  ,   \
                        residence_period    ,   \
                        residence_expiration_date   ,   \
                        employee.account_no ,   \
                        bank_name   ,   \
                        branch_name ,   \
                        account_type    ,   \
                        account_name    \
                from    employee, department , contact, academic_career, education_institute, career, passport, residence, account  \
                where   employee.employee_no = contact.employee_no  \
                        and employee.department_id = department.department_id   \
                        and employee.employee_no = academic_career.employee_no  \
                        and employee.employee_no = education_institute.employee_no  \
                        and employee.employee_no = career.employee_no   \
                        and employee.passport_no = passport.passport_no \
                        and employee.residence_no = residence.residence_no  \
                        and employee.account_no = account.account_no\
                        and employee.employee_no = '%s'"    \
                        %employeeNo)


    employee = [dict(employeeNo          = row[0]    ,   \
                    departmentCategory       = row[1]    ,   \
                    departmentName      = row[2]    ,   \
                    unit    = row[3]    ,   \
                    lastNameKanji   = row[4]    ,   \
                    firstNameKanji     = row[5]    ,   \
                    lastNameHurigana    = row[6]    ,   \
                    firstNameHurigana           = row[7]    ,   \
                    lastNameEnglish              = row[8]    ,   \
                    firstNameEnglish            = row[9]    ,   \
                    birthdate         = row[10]   ,   \
                    gender         = row[11]   ,   \
                    mynumber            = row[12]   ,   \
                    mailCompany          = row[13]   ,   \
                    mailPrivate         = row[14]   ,   \
                    joinDate           = row[15]   ,   \
                    postNo        = row[16]   ,   \
                    address  = row[17]   ,   \
                    cellphoneNo      = row[18]   ,   \
                    phoneNo                = row[19]   ,   \
                    postNoMotherCountry         = row[20]   ,   \
                    addressMotherCountry         = row[21]   ,   \
                    cellphoneNoMotherCountry         = row[22]   ,   \
                    phoneNoMotherCountry         = row[23]   ,   \
                    nameEmergency         = row[24]   ,   \
                    relationEmergency         = row[25]   ,   \
                    cellphoneNoEmergency         = row[26]   ,   \
                    graduationDate = row[27]    ,   \
                    school = row[28]    ,    \
                    major = row[29] ,   \
                    educationStartDate = row[30]    ,   \
                    institutionName = row[31]   ,   \
                    courseName = row[32]    ,   \
                    careerJoinDate = row[33]    ,   \
                    careerExitDate = row[34]    ,   \
                    companyName = row[35]   ,   \
                    position = row[36]  ,   \
                    task = row[37]  ,   \
                    isAbroad = row[38]  ,   \
                    passportNo = row[39]    ,   \
                    passportExpirationDate = row[40]    ,   \
                    passportCountry = row[41]   ,   \
                    residenceNo = row[42]   ,   \
                    residenceDeliveryDate = row[43] ,   \
                    residenceCategory = row[44] ,   \
                    residencePeriod = row[45]   ,   \
                    residenceExpirationDate = row[46]   ,   \
                    accountNo = row[47] ,   \
                    bankName = row[48]  ,   \
                    branchName = row[49]    ,   \
                    accountType = row[50]   ,   \
                    accountName = row[51]   \
                    ) for row in cur.fetchall()         \
              ]                    
    print(employee)
    def dateToString(value) : 
        if isinstance(value, datetime.date): 
            return value.strftime('%Y-%m-%d')



    # return json.dumps({'employee' : employee}, default = dateToString)
    return json.dumps(employee[0], default = dateToString)


@app.route("/deleteEmployee", methods = ["GET", "POST"])
def deleteEmployee():
    employeeNo = request.json["obj"]
    cur.execute("select employee_no \
                 from employee \
                 where employee_no = '%s'"\
                 %employeeNo)
    tmp = cur.fetchall()

    # 삭제할 사원번호 존재할경우
    if tmp : 
        try : 
            cur.execute("DELETE FROM passport \
                    USING employee\
                    WHERE passport.passport_no = employee.passport_no")
        
        
            cur.execute("DELETE FROM residence \
                        USING employee\
                        WHERE residence.residence_no = employee.residence_no")
            

            cur.execute("DELETE FROM account \
                        USING employee\
                        WHERE account.account_no = employee.account_no")
            
            cur.execute("DELETE FROM employee \
                        WHERE employee_no = '%s'"%employeeNo)
            conn.commit()
        except :
            # 에러발생시 return False
            print("Error occured")
            return json.dumps({"isSuccess":False},ensure_ascii=False)
    else :
        # 삭제할 사원번호 없을경우 return False
        return json.dumps({"isSuccess":False},ensure_ascii=False)

    return json.dumps({"isSuccess":True},ensure_ascii=False)




def main():
    
    app.run(host='0.0.0.0',port=3001,debug=True,use_reloader=True)


if __name__ == '__main__':
    main()