import { ImapFlow, Logger } from "imapflow";

const logger: Logger | false = {} as any;

// $ExpectType ImapFlow
const client = new ImapFlow({
    host: "127.0.0.1",
    auth: {
        user: "test",
        pass: "test",
    },
    port: 993,
    logger,
});

// $ExpectType ImapFlow
const client1 = new ImapFlow({
    host: "127.0.0.1",
    auth: {
        user: "test",
        accessToken: "test",
    },
    port: 993,
    logger,
});

// $ExpectType Promise<MailboxLockObject>
client.getMailboxLock("INBOX");

// $ExpectType Promise<FetchMessageObject>
client.fetchOne("*", { uid: true });

// $Expect void
client.logout();

// $Expect Promise<ListResponse[]>
client.list();

// $Expect Promise<MailboxDeleteResponse>
client.mailboxDelete("INBOX.example");

// $Expect Promise<StatusObject>
client.status("INBOX", { uidNext: true });

// $Expect Promise<FetchMessageObject[]>
client.fetchAll("1:*", { uid: true });

// $Expect Promise<{ [key: string]: DownloadObject }>
client.downloadMany("*", ["1", "1.1"]);

// $Expect Promise<QuotaResponse | boolean>
client.getQuota("INBOX");

// $Expect Promise<boolean>
client.setFlagColor("*", "red");
