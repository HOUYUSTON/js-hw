var users = {
        14587: {
                name: "Ivan",
                email: "ivan78@gmail.com"
        },
        28419: {
                name: "Georg",
                email: "georg.klep@gmail.com"
        },
        41457: {
                name: "Stephan",
                email: "stephan.borg@gmail.com"
        }
}
var posts = {
        7891451: {
                author: 14587,
                text: "Imagine we can encapsulate these secondary responsibilities in functions"
        },
        7891452: {
                author: 28419,
                text: `� ������������ �������� ����� super ������������ ��� �������, ���������� ������������ �����������. 
                        Ÿ ���������� ������� �� ������� ��������� � ��������� ����� this � ���� ������������. 
                        �������� ����� super ����� ����� ���� ������������ ��� ������ ������� ������������� �������`
        },
        7891453: {
                author: 28419,
                text: `DOM �� ������������ ��� �� ��������� ��������� ������������ ���� ��� �������. 
                        ������� ������������ ����, ����� �� ������ � ���������� �����, �� ����� ���� �������`
        },
        7891454: {
                author: 14587,
                text: "�������� ����� super ������������ ��� ������ �������, ������������� �������� �������"
        }
}
var comments = {
        91078454: {
                postId: 7891451,
                author: 28419,
                text: `The static String.fromCharCode() method returns a string created 
                        from the specified sequence of UTF-16 code units`
        },
        91078455: {
                postId: 7891451,
                author: 41457,
                text: `HTML ������� <template> � ��� �������� ��� ����������� ������� ����������� ��������, 
                        ������� �� ������������ �� ����� ��������, �� ����� ���� ��������������� ��� ������ JavaScript`
        },
        91078457: {
                postId: 7891452,
                author: 41457,
                text: "���������� ������ String �������� ������������� �����, ���, ������������������� ��������"
        },
        91078458: {
                postId: 7891452,
                author: 14587,
                text: `The Element.namespaceURI read-only property returns the namespace URI of the element, 
                        or null if the element is not in a namespace`
        }
}

function getCurrentPostComments ( idPost ) {
        var res = []
        var Post = function (name, text) {
            this.name = name
            this.text = text
        }
        var post
        for (var prop in comments) {
            comments [prop].postId === idPost ? res.push(post = new Post (users [comments [prop].author].name, comments [prop].text)) : null
        }
        return res
}

console.log ( getCurrentPostComments ( 7891451 ) )