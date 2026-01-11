class Logic {
    constructor () {}

    createIssue(subject, body){
        if (typeof subject !== 'string') throw new Error ('invalid subject type')
        if(subject.length < 1) throw new Error('invalid subject length')
        if(typeof body !== 'string') throw new Error('invalid body type')

        const issue = {
            id: 'issue-' + data.issuesCount, 
            subject: subject,
            body: body, 
            status: '🟢',
            date: new Date().toLocaleDateString()
        }

        data.insertIssue(issue)
    }

    getAllIssues(){
        return data.getIssues()
    }

    closeIssue(issueId){
        const issue = data.findIssueById(issueId)

        if(!issue) throw new Error('issue not found')

        issue.status = '🔴'
    }
}

//instance 

const logic = new Logic()