import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { EllipsisVertical, Plus } from 'lucide-react'

const Trip = () => {
  return (
    <div className="px-20 py-24 bg-purple-100">
      <Card>

        <CardHeader className="border-b">
          <CardTitle>See your trips</CardTitle>
          <CardDescription>View and manage all your trips</CardDescription>
          <CardAction>
            <a href="/trips/add"><Button> <Plus /> Add Trip</Button></a>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-3 gap-6">
              <Card>
                <CardHeader className="border-b">
                  <CardTitle>Trip to Nepal with friends</CardTitle>
                  <CardDescription>Sep 10, 2026 - Sep 12, 2026</CardDescription>
                  <CardAction>
                    <EllipsisVertical />
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <p>Budget: Rs. 70000</p>
                  <p>Spent: Rs. 2000</p>
                </CardContent>
                <CardFooter>
                  <p>Destinations: Kathmandu, Pokhara, Biratnagar.</p>
                </CardFooter>
              </Card>
          </div>
        </CardContent>

      </Card>
    </div>
  )
}

export default Trip