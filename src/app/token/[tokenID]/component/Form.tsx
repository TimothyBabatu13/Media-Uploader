import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SetTransactionButtons from "./SetTransactionButtons"

export function Form() {
  return (
    <Tabs defaultValue="buy" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-black">
        <TabsTrigger className=" text-white data-[state=active]:bg-green-400 data-[state=active]:text-black" value="buy">BUY</TabsTrigger>
        <TabsTrigger className=" text-white data-[state=active]:bg-pink-500 data-[state=active]:text-black" value="sell">SELL</TabsTrigger>
      </TabsList>
      <TabsContent value="buy">
        <Card>
          <CardHeader>
            <SetTransactionButtons />
            {/* <CardTitle>Account</CardTitle> */}
            {/* <CardDescription>
             
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              {/* <Label htmlFor="name">Name</Label> */}
              <Input id="name" placeholder="0.00" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="sell">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
